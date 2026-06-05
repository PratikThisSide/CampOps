db_config.py
=====================================

**Purpose**: Database connection configuration and management

**Functions**:

1. `get_connection()`
   - Establishes connection to MySQL database
   - Returns: Connection object or None on failure
   - Handles connection errors gracefully
   - Prints connection status messages

2. `close_connection(connection)`
   - Safely closes database connection
   - Prevents resource leaks
   - Confirms closure status

**Configuration**:
- Host: localhost
- Port: 3306
- User: root
- Password: root@123
- Database: campus_maintenance

**Error Handling**:
- Catches mysql.connector.Error exceptions
- Prints error messages to console
- Returns None on connection failure

**Usage Example**:

```python
from db_config import get_connection, close_connection

# Get connection
conn = get_connection()

if conn:
    cursor = conn.cursor()
    # Your database operations
    cursor.close()
    close_connection(conn)
```

**Key Improvements**:
- ✅ Exception handling
- ✅ Status logging
- ✅ Resource cleanup
- ✅ Docstrings
- ✅ Error messages
