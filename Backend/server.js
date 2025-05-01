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

// Connect to database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// Serve static files from Frontend folder
app.use(express.static(path.join(__dirname, '../Frontend')));

// API Routes
app.post('/api/requests', (req, res) => {
  const { building, room_number, description } = req.body;

  if (!building || !room_number || !description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const email = 'alice@student.com'; // Placeholder for actual session/email logic

  const getUserQuery = 'SELECT user_id FROM users WHERE email = ?';
  db.query(getUserQuery, [email], (err, results) => {
    if (err) {
      console.error('Error finding user:', err);
      return res.status(500).json({ message: 'User lookup failed.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const user_id = results[0].user_id;
    const insertQuery = `
      INSERT INTO requests (building, room_number, description, status_id)
      VALUES (?, ?, ?, ?)
    `;
    db.query(insertQuery, [building, room_number, description, 1], (err, result) => {
      if (err) {
        console.error('Error inserting request:', err);
        return res.status(500).json({ message: 'Failed to submit request.' });
      }
      return res.status(200).json({ message: 'Request submitted successfully.' });
    });
  });
});

// Serve frontend files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend', 'login.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});