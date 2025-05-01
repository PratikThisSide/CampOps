const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // use your MySQL username
  password: '',         // your MySQL password
  database: 'campus_maintenance'
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB Connection Failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL Database');
});

module.exports = db;
