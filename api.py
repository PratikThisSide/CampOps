import os
import time
from datetime import datetime, timedelta
from twilio.rest import Client
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
CHECK_INTERVAL = 10  # seconds
DEBUG = True  # Set to False in production

# Initialize Twilio client
client = Client(os.getenv('TWILIO_ACCOUNT_SID'), os.getenv('TWILIO_AUTH_TOKEN'))

def log(message):
    """Helper function for logging"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")

def get_db_connection():
    """Create and return a new database connection"""
    try:
        return mysql.connector.connect(
            host=os.getenv('DB_HOST'),
            database=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD')
        )
    except Error as e:
        log(f"Database connection failed: {e}")
        return None

def get_new_requests(last_checked_time):
    """Fetch new requests since last checked time"""
    connection = get_db_connection()
    if not connection:
        return []
    
    try:
        cursor = connection.cursor(dictionary=True)
        
        query = """
        SELECT id, room_number, description, created_at 
        FROM requests 
        WHERE created_at > %s
        ORDER BY created_at
        """
        
        cursor.execute(query, (last_checked_time,))
        results = cursor.fetchall()
        
        if DEBUG:
            log(f"Found {len(results)} new requests in database query")
            for req in results:
                log(f"Request found - ID: {req['id']}, Room: {req['room_number']}, Created: {req['created_at']}")
        
        return results
        
    except Error as e:
        log(f"Database query failed: {e}")
        return []
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

def send_whatsapp_notification(request):
    """Send formatted WhatsApp notification to admin"""
    message_body = f"""Hi admin,
a new request has been created.

room no- {request['room_number']}
description- {request['description']}"""
    
    try:
        message = client.messages.create(
            from_=os.getenv('TWILIO_WHATSAPP_NUMBER'),
            to=os.getenv('ADMIN_WHATSAPP_NUMBER'),
            body=message_body
        )
        log(f"Successfully sent notification for request {request['id']} (Room: {request['room_number']})")
        log(f"Twilio SID: {message.sid}")
        return True
    except Exception as e:
        log(f"Failed to send notification for request {request['id']}: {str(e)}")
        return False

def monitor_requests():
    """Continuously monitor for new requests"""
    log("Starting request monitoring service")
    log(f"Twilio number: {os.getenv('TWILIO_WHATSAPP_NUMBER')}")
    log(f"Admin number: {os.getenv('ADMIN_WHATSAPP_NUMBER')}")
    
    # Start by checking requests from the last 1 minute
    last_checked_time = datetime.now() - timedelta(minutes=1)
    
    while True:
        try:
            log(f"Checking for new requests since {last_checked_time}")
            new_requests = get_new_requests(last_checked_time)
            
            if new_requests:
                log(f"Processing {len(new_requests)} new request(s)")
                for request in new_requests:
                    if send_whatsapp_notification(request):
                        # Update last checked time to the newest request's time
                        last_checked_time = request['created_at']
                    else:
                        log("Notification failed, will retry next cycle")
            else:
                if DEBUG:
                    log("No new requests found")
            
            time.sleep(CHECK_INTERVAL)
            
        except KeyboardInterrupt:
            log("\nService stopped by user")
            break
        except Exception as e:
            log(f"Unexpected error in main loop: {str(e)}")
            time.sleep(30)  # Wait longer before retrying after error

if __name__ == "__main__":
    monitor_requests()