const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Blizzard@123',
  database: 'app'
});

con.connect((err) => {
  if (err) {
    return console.error('❌ Error connecting: ' + err.message);
  }
  console.log('✅ Connected to the MySQL server.');
  con.end();
});
