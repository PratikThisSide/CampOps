// requests.js

const express = require('express');
const router = express.Router();

// Route to fetch all maintenance requests
router.get('/', (req, res) => {
    const query = 'SELECT * FROM maintenance_requests'; // Replace with your actual table name
    req.db.query(query, (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error fetching requests', error: err });
        } else {
            res.status(200).send(results);
        }
    });
});

// Route to add a new maintenance request
router.post('/', (req, res) => {
    const { student_id, description, room_number, priority } = req.body;
    const query = 'INSERT INTO maintenance_requests (student_id, description, room_number, priority) VALUES (?, ?, ?, ?)';

    req.db.query(query, [student_id, description, room_number, priority], (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error adding request', error: err });
        } else {
            res.status(201).send({ message: 'Request added successfully', requestId: results.insertId });
        }
    });
});

// Route to update the status of a maintenance request
router.put('/:id', (req, res) => {
    const { status } = req.body;
    const requestId = req.params.id;
    const query = 'UPDATE maintenance_requests SET status = ? WHERE id = ?';

    req.db.query(query, [status, requestId], (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error updating request', error: err });
        } else {
            res.status(200).send({ message: 'Request status updated' });
        }
    });
});

// Route to delete a maintenance request
router.delete('/:id', (req, res) => {
    const requestId = req.params.id;
    const query = 'DELETE FROM maintenance_requests WHERE id = ?';

    req.db.query(query, [requestId], (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error deleting request', error: err });
        } else {
            res.status(200).send({ message: 'Request deleted successfully' });
        }
    });
});

module.exports = (db) => {
    // Attach the database connection to the router
    router.use((req, res, next) => {
        req.db = db;
        next();
    });

    return router;
};
