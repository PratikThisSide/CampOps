# CampOps - Campus Maintenance Scheduling System

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-18.x-green)
![Python](https://img.shields.io/badge/python-3.x-blue)
![Status](https://img.shields.io/badge/status-Active-success)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Database Setup](#database-setup)
- [API Documentation](#api-documentation)
- [Frontend Features](#frontend-features)
- [Backend Services](#backend-services)
- [Key Components](#key-components)
- [Usage Guide](#usage-guide)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**CampOps** is a comprehensive **Campus Maintenance Scheduling System** designed to streamline and automate the process of managing maintenance requests within a campus environment. The system enables students and teachers to submit maintenance requests, track their status, and allows administrators to manage and prioritize these requests efficiently.

### Key Objectives
- Simplify the maintenance request submission process
- Provide real-time status tracking and notifications
- Enable administrators to manage and schedule maintenance tasks
- Improve campus infrastructure management through automated alerts (WhatsApp notifications)
- Generate reports and analytics for maintenance operations

---

## ✨ Features

### For Users (Students/Teachers)
✅ **Easy Request Submission** - Submit maintenance requests with room number, building, and description  
✅ **Request Tracking** - View status of submitted requests in real-time  
✅ **Completed History** - Access records of previously completed maintenance tasks  
✅ **User Profile** - Manage personal information and view request history  
✅ **Dashboard** - Intuitive interface with quick access to all features  

### For Administrators
✅ **Request Management** - View all maintenance requests with filtering and sorting  
✅ **Real-time Alerts** - Automatic WhatsApp notifications for new requests  
✅ **User Management** - Manage user accounts and roles  
✅ **Status Updates** - Update request status and assign priority levels  
✅ **Analytics Dashboard** - Generate reports and analyze request trends  
✅ **Admin Profile** - Manage admin account settings  

### System Features
✅ **Automated Monitoring** - Background service continuously monitors new requests  
✅ **Multi-role Support** - Different interfaces for students, teachers, and administrators  
✅ **Secure Authentication** - Email and phone-based login verification  
✅ **WhatsApp Integration** - Twilio-powered real-time notifications  
✅ **Responsive Design** - Works on desktop, tablet, and mobile devices  
✅ **Dark Mode** - Optional dark theme for user comfort  

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend Layer                          │
│  (HTML/CSS/JavaScript - User Interface)                     │
├─────────────────────────────────────────────────────────────┤
│                     Backend Layer                           │
│  (Express.js Server - API & Business Logic)                │
├─────────────────────────────────────────────────────────────┤
│              Background Service Layer                       │
│  (Python - Monitoring & Notifications)                     │
├─────────────────────────────────────────────────────────────┤
│                     Database Layer                          │
│  (MySQL - Data Persistence)                                │
├─────────────────────────────────────────────────────────────┤
│              External Services (3rd Party)                  │
│  (Twilio - WhatsApp Notifications)                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 💻 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | HTML5, CSS3, JavaScript, SCSS | User Interface & Interactivity |
| **Backend** | Node.js, Express.js | Server & API Routes |
| **Database** | MySQL | Data Storage & Management |
| **Backend Service** | Python | Background Task Monitoring |
| **Notifications** | Twilio API | WhatsApp Alerts |
| **Package Manager** | npm | Node.js Dependencies |
| **Runtime** | Node.js 18.x | Execution Environment |

### Language Composition
- **HTML**: 43.9% - Structure & Templates
- **CSS**: 28.2% - Styling & Layout
- **JavaScript**: 16.2% - Frontend Logic & Interactivity
- **Python**: 7.6% - Background Services
- **SCSS**: 3.7% - Advanced Styling
- **TypeScript**: 0.4% - Type Safety (Components)

---

## 📁 Project Structure

```
CampOps/
├── Frontend/                          # User Interface
│   ├── index.html                    # Student Dashboard
│   ├── login.html                    # Login Page
│   ├── login.js                      # Login Logic & Validation
│   ├── raise-request.html            # Submit New Request
│   ├── view-request.html             # View Pending Requests
│   ├── completedRequest.html         # Completed Requests History
│   ├── profile.html                  # User Profile
│   ├── report.html                   # Analytics & Reports
│   ├── admin-home.html               # Admin Dashboard
│   ├── admin-profile.html            # Admin Profile
│   ├── manage-users.html             # User Management
│   ├── teacher-dashboard.html        # Teacher Interface
│   ├── user-guide.html               # Help & Documentation
│   ├── style.css                     # Main Stylesheet
│   ├── login.css                     # Login Styles
│   ├── admin-home.css                # Admin Dashboard Styles
│   ├── profile.css                   # Profile Styles
│   ├── manage-users.css              # User Management Styles
│   ├── view-request.css              # Request View Styles
│   ├── stylecreatereq.css            # Create Request Styles
│   ├── campus-maintenance.component.* # Angular Components (TS/SCSS/HTML)
│   ├── app.js                        # Main Application Script
│   ├── script.js                     # Utility Scripts
│   └── [Images/Assets]               # Campus Images & Logo
│
├── Backend/                           # Server & API
│   ├── server.js                     # Express Server & Main Routes
│   ├── db.js                         # MySQL Connection Setup
│   ├── package.json                  # Node Dependencies
│   ├── package-lock.json             # Dependency Lock File
│   ├── sendWhatsApp.js               # Twilio Integration
│   └── routes/                       # API Route Handlers (expandable)
│
├── app.py                            # Flask Application Entry Point
├── api.py                            # Background Service - Request Monitoring & Notifications
├── db_config.py                      # Python Database Configuration
│
├── .gitignore                        # Git Ignore Rules
├── node_modules/                     # npm Dependencies
├── __pycache__/                      # Python Cache
└── README.md                         # This File

```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Python**: Version 3.x or higher ([Download](https://www.python.org/))
- **MySQL**: Version 5.7 or higher ([Download](https://www.mysql.com/downloads/))
- **Git**: For version control ([Download](https://git-scm.com/))
- **Twilio Account**: For WhatsApp notifications (Free trial available)

### Verify Installation
```bash
node --version      # Should be v18.x or higher
npm --version       # Should be 6.x or higher
python --version    # Should be 3.x or higher
mysql --version     # Should be 5.7+
```

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/PratikThisSide/CampOps.git
cd CampOps
```

### Step 2: Backend Setup
```bash
# Navigate to Backend directory
cd Backend

# Install Node dependencies
npm install

# Return to root directory
cd ..
```

### Step 3: Python Dependencies
```bash
# Install Python packages
pip install -r requirements.txt

# Or install individually
pip install flask mysql-connector-python python-dotenv twilio
```

---

## ⚙️ Configuration

### Step 1: Create Environment Files

Create a `.env` file in the root directory:

```env
# Backend Server
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root@123
DB_NAME=campus_maintenance

# Twilio Configuration (for WhatsApp Notifications)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
ADMIN_WHATSAPP_NUMBER=whatsapp:+1234567890

# Flask Configuration
FLASK_ENV=development
```

### Step 2: Configure Database Credentials

Update credentials in:
- `db_config.py` - Python database configuration
- `Backend/db.js` - Node.js database configuration

```python
# db_config.py
def get_connection():
    return mysql.connector.connect(
        host="localhost",
        port=3306,
        user="your_mysql_user",
        password="your_mysql_password",
        database="campus_maintenance"
    )
```

### Step 3: Twilio Setup

1. Sign up at [Twilio](https://www.twilio.com/)
2. Get your Account SID and Auth Token
3. Enable WhatsApp API
4. Get your Twilio WhatsApp number
5. Add environment variables to `.env`

---

## 💾 Database Setup

### Create Database & Tables

```sql
-- Create Database
CREATE DATABASE IF NOT EXISTS campus_maintenance;
USE campus_maintenance;

-- Users Table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    role ENUM('student', 'teacher', 'admin') DEFAULT 'student',
    password_hash VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Status Table
CREATE TABLE status (
    status_id INT PRIMARY KEY,
    status_name VARCHAR(50) NOT NULL
);

-- Requests Table
CREATE TABLE requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    building VARCHAR(100) NOT NULL,
    room_number VARCHAR(20) NOT NULL,
    description TEXT NOT NULL,
    status_id INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (status_id) REFERENCES status(status_id)
);

-- Insert Default Status Values
INSERT INTO status (status_id, status_name) VALUES 
(1, 'Pending'),
(2, 'In Progress'),
(3, 'Completed'),
(4, 'On Hold');
```

---

## 🏃 Running the Application

### Terminal 1: Start Backend Server
```bash
cd Backend
npm start

# Or with nodemon for development (auto-reload)
npm install -g nodemon
nodemon server.js

# Output: Server running on http://localhost:5000
```

### Terminal 2: Start Background Monitoring Service (Python)
```bash
python api.py

# Output: Starting request monitoring service
```

### Terminal 3: (Optional) Start Flask App
```bash
python app.py

# Output: Running on http://127.0.0.1:5000
```

### Access the Application
Open your browser and navigate to:
- **User Interface**: `http://localhost:5000`
- **Admin Dashboard**: `http://localhost:5000/admin-home.html`
- **Login**: `http://localhost:5000/login.html`

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

#### 1. **Create Maintenance Request**
```http
POST /api/requests
Content-Type: application/json

{
  "building": "IT Building",
  "room_number": "201",
  "description": "Water leakage in ceiling"
}

Response: 
{
  "message": "Request submitted successfully.",
  "requestId": 1
}
```

#### 2. **Get All Requests**
```http
GET /api/requests

Response:
{
  "requests": [
    {
      "id": 1,
      "building": "IT Building",
      "room_number": "201",
      "description": "Water leakage",
      "status": "Pending",
      "created_at": "2025-01-15T10:30:00Z"
    }
  ]
}
```

#### 3. **Update Request Status**
```http
PUT /api/requests/:id
Content-Type: application/json

{
  "status": "In Progress"
}

Response:
{
  "message": "Request updated successfully."
}
```

---

## 🎨 Frontend Features

### Key Pages

1. **Login Page** (`login.html`)
   - Email validation
   - Phone number verification
   - Role-based redirection (Student/Teacher/Admin)
   - Error handling with user feedback

2. **Dashboard** (`index.html`)
   - Quick action cards
   - Pending requests summary
   - Dark mode toggle
   - Animated UI elements
   - Responsive grid layout

3. **Create Request** (`raise-request.html`)
   - Form validation
   - Building & room selection
   - Description input
   - Real-time form feedback

4. **View Requests** (`view-request.html`)
   - Request filtering
   - Status tracking
   - Request details modal
   - Search functionality

5. **Admin Dashboard** (`admin-home.html`)
   - All requests overview
   - User management interface
   - Analytics section
   - Quick stats

### UI/UX Features
- **Responsive Design**: Mobile, tablet, and desktop compatible
- **Dark Mode**: Toggle between light and dark themes
- **Animations**: Smooth CSS animations and transitions
- **Icons**: FontAwesome integration for modern icons
- **Accessibility**: WCAG compliant design

---

## ⚙️ Backend Services

### 1. Express Server (`Backend/server.js`)
- **CORS Enabled**: Allows cross-origin requests
- **JSON Middleware**: Parses incoming JSON data
- **Database Integration**: MySQL connection management
- **Static File Serving**: Serves Frontend folder
- **Error Handling**: Comprehensive error handling middleware

### 2. Request Monitoring Service (`api.py`)
- **Continuous Monitoring**: Checks for new requests every 10 seconds
- **WhatsApp Notifications**: Sends alerts to admin
- **Database Polling**: Queries MySQL for new requests
- **Error Recovery**: Handles connection failures gracefully
- **Logging**: Timestamped logs for debugging

**Key Features:**
```python
- get_db_connection(): Establishes MySQL connection
- get_new_requests(): Fetches new requests since last check
- send_whatsapp_notification(): Sends Twilio WhatsApp messages
- monitor_requests(): Main loop for continuous monitoring
```

### 3. Flask App (`app.py`)
- **Request Submission Endpoint**: `/submit` route
- **Form Processing**: Handles POST requests
- **Database Insertion**: Stores requests in MySQL
- **Response Handling**: Returns success/error messages

---

## 🔑 Key Components

### Database Schema

**Users Table**
- `user_id`: Primary key
- `email`: Unique email address
- `phone`: Phone number for verification
- `role`: user_type (student/teacher/admin)
- `name`: Full name

**Requests Table**
- `id`: Request ID
- `user_id`: Foreign key to users
- `building`: Building name
- `room_number`: Room/location
- `description`: Issue description
- `status_id`: Current status
- `created_at`: Submission timestamp

**Status Table**
- `status_id`: 1 (Pending), 2 (In Progress), 3 (Completed), 4 (On Hold)

### Authentication Flow
```
User Login → Email & Phone Validation 
    → Database Check → Role Detection 
        → Redirect to Dashboard
```

### Request Lifecycle
```
User Submits Request 
    → Stored in Database 
        → Background Service Detects → WhatsApp Alert to Admin 
            → Admin Updates Status → User Sees Status Update
```

---

## 📚 Usage Guide

### For Students/Teachers

1. **Login**
   - Enter college email
   - Enter phone number
   - Click Login

2. **Submit Request**
   - Go to "Create Request"
   - Select building and room
   - Describe the issue
   - Click Submit

3. **Track Request**
   - Go to "View Requests"
   - See status and updates
   - Check request history

### For Administrators

1. **Login with Admin Account**
   - Email: `admin@college.edu`
   - Phone: `1122334455`

2. **Manage Requests**
   - View all pending requests
   - Update request status
   - Set priority levels

3. **Monitor System**
   - Check analytics dashboard
   - View completion trends
   - Manage user accounts

---

## 🔄 Background Service Workflow

The `api.py` background service:

```
START
  ↓
Initialize Twilio Client
  ↓
Set Last Checked Time (Current - 1 minute)
  ↓
LOOP (Every 10 seconds)
  ├─ Query Database for New Requests
  ├─ If new requests found:
  │  ├─ Format WhatsApp Message
  │  ├─ Send via Twilio
  │  └─ Update Last Checked Time
  ├─ Log Activity
  └─ Sleep 10 seconds
  ↓
ERROR HANDLING (Retry on failure)
  ↓
GRACEFUL SHUTDOWN (Ctrl+C)
```

---

## 🚀 Future Enhancements

### Planned Features
- [ ] **User Ratings**: Rate maintenance work quality
- [ ] **Cost Tracking**: Track maintenance costs
- [ ] **Asset Management**: Inventory management for equipment
- [ ] **Email Notifications**: Gmail integration for alerts
- [ ] **Mobile App**: Native iOS/Android application
- [ ] **Advanced Analytics**: Predictive maintenance insights
- [ ] **File Uploads**: Attach images/documents to requests
- [ ] **Real-time Chat**: In-app messaging with admins
- [ ] **Scheduling**: Calendar-based request scheduling
- [ ] **Payment Integration**: For external services

### Technology Upgrades
- [ ] Migrate to React/Vue.js for frontend
- [ ] Implement REST API versioning
- [ ] Add unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline setup
- [ ] Authentication (JWT/OAuth)
- [ ] Database indexing optimization

---

## 📝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow consistent naming conventions
- Add comments for complex logic
- Test thoroughly before submitting PR
- Update documentation as needed

---

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
```
Solution: Verify MySQL is running and credentials in .env are correct
- Check MySQL service: mysql.server status (Mac) or services (Windows)
- Verify credentials in db_config.py and Backend/db.js
```

**WhatsApp Not Sending**
```
Solution: Check Twilio credentials
- Verify TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN in .env
- Ensure Twilio WhatsApp sandbox is activated
- Check phone number format: whatsapp:+1234567890
```

**Port Already in Use**
```
Solution: Change PORT in .env or kill process using the port
- Windows: netstat -ano | findstr :5000, then taskkill /PID <PID>
- Mac/Linux: lsof -i :5000, then kill -9 <PID>
```

**Frontend Not Loading**
```
Solution: Check Backend server is running
- Ensure Backend/server.js is running on port 5000
- Check console for error messages
- Verify Frontend files exist in Frontend/ directory
```

---

## 📞 Support & Contact

- **Author**: PratikThisSide
- **Repository**: [GitHub - CampOps](https://github.com/PratikThisSide/CampOps)
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Share ideas via GitHub Discussions

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Python Documentation](https://docs.python.org/3/)
- [Twilio WhatsApp API](https://www.twilio.com/docs/whatsapp/api)
- [HTML/CSS/JavaScript MDN Web Docs](https://developer.mozilla.org/)

---

**Last Updated**: June 5, 2025  
**Version**: 1.0.0  
**Status**: ✅ Active & Maintained

---

### 🎉 Thank you for using CampOps!

