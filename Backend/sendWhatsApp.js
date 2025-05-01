require('dotenv').config();
const twilio = require('twilio');
const db = require('./db');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

function notifyAdminWithLatestRequest() {
  const query = `
    SELECT building, room_number, description 
    FROM requests
    ORDER BY created_at DESC
    LIMIT 1
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return;
    }

    if (results.length > 0) {
      const req = results[0];

      const messageBody = `Hi admin,
a new request has been created.

room no- ${req.room_number}
description- ${req.description}`;

      client.messages
        .create({
          from: process.env.TWILIO_WHATSAPP_NUMBER,
          to: process.env.ADMIN_WHATSAPP_NUMBER,
          body: messageBody,
        })
        .then((msg) => console.log('Message sent:', msg.sid))
        .catch((err) => console.error('Twilio Error:', err));
    } else {
      console.log('No maintenance requests found.');
    }
  });
}

module.exports = notifyAdminWithLatestRequest;