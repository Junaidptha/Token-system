const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');  // MySQL driver

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Change this as per your MySQL credentials
  password: 'root',  // Add password if necessary
  database: 'hostel_feedback'  // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Handle POST request to submit feedback
app.post('/submit-feedback', (req, res) => {
  const { name, feedback } = req.body;
  
  // Insert feedback and name into the database
  const query = 'INSERT INTO feedbacks (name, feedback) VALUES (?, ?)';
  db.query(query, [name, feedback], (err, result) => {
    if (err) {
      console.error('Error inserting feedback:', err);
      return res.status(500).json({ success: false, message: 'Error saving feedback' });
    }
    res.status(200).json({ success: true, message: 'Feedback submitted successfully!' });
  });
});


app.get('/get-feedback', (req, res) => {
  const query = 'SELECT * FROM feedbacks ORDER BY created_at DESC'; // Fetch feedbacks from most recent
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching feedback:', err.stack);
      return res.status(500).json({ success: false });
    }
    res.json({ feedbacks: results });
  });
});






app.get("/", (req, res) => {
  res.sendFile(__dirname + "/temp.html");
});
app.get("/hostel1.html", (req, res) => {
  res.sendFile(__dirname + "/hostel1.html");
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
