const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@123', // your MySQL password if any
  database: 'campus_maintenance' // make sure this is your DB name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// Route to handle maintenance requests
app.post('/requests', (req, res) => {
  const { building, room_number, description } = req.body;

  console.log('Received request:', req.body); // Debug log

  if (!building || !room_number || !description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Replace this with actual user session/email logic later
  const email = 'alice@student.com'; // Hardcoded for now

  // Get user_id from users table
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

    // Insert maintenance request (no user_id needed now in request, assuming session-based user_id)
    const insertQuery = `INSERT INTO requests (building, room_number, description, status_id)
                         VALUES (?, ?, ?, ?)`;
    db.query(insertQuery, [building, room_number, description, 1], (err, result) => {
      if (err) {
        console.error('Error inserting request:', err);
        return res.status(500).json({ message: 'Failed to submit request.' });
      }

      return res.status(200).json({ message: 'Request submitted successfully.' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
