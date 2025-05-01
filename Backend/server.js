require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (Railway or local)
const dbConfig = process.env.DATABASE_URL 
  ? {
      uri: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false } // Required for Railway
    }
  : {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    };

const db = mysql.createConnection(dbConfig);

// Serve static files from Frontend folder
app.use(express.static(path.join(__dirname, '../Frontend')));

// API Routes (keep your existing routes)
app.post('/requests', (req, res) => {
  // Your existing route logic
});

// Fallback to frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/login.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});