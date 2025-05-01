import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",          # or your DB host (e.g. 127.0.0.1)
        port=3306,                 # default MySQL port
        user="root",    # usually 'root' or whatever you set
        password="root@123",  # set in MySQL
        database="campus_maintenance"
    )
