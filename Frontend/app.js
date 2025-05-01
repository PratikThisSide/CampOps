const express = require('express');
const notifyAdminWithLatestRequest = require('../Backend/sendWhatsApp');

const app = express();
app.use(express.json());

app.get('/notify-admin', (req, res) => {
  notifyAdminWithLatestRequest();
  res.send('Admin will be notified of the latest request.');
});

app.listen(3000, () => console.log('Server running on port 3000'));
