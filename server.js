const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname));
// Database connection
const db = mysql.createConnection({
  host: "localhost",          // Replace with your MySQL host
  user: "root",               // Replace with your MySQL username
  password: "Khan@619",  // Replace with your MySQL password
  database: "registrationDB", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the database.");
});

// Serve HTML files
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/login.html");
// });
// app.get("/login.html", (req, res) => {
//   res.sendFile(__dirname + "/login.html");
// });
// app.get("/register.html", (req, res) => {
//   res.sendFile(__dirname + "/register.html");
// });

//route to pages
app.get("/page1.html", (req, res) => {
  res.sendFile(__dirname + "/page1.html");
});
app.get("/page2.html", (req, res) => {
  res.sendFile(__dirname + "/page2.html");
});
app.get("/page3.html", (req, res) => {
  res.sendFile(__dirname + "/page3.html");
});
app.get("/page4.html", (req, res) => {
  res.sendFile(__dirname + "/page4.html");
});

// Registration route
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error("Error inserting data: " + err.stack);
      return res.status(500).send("An error occurred. Please try again.");
    }

    res.send("Registration successful!");
  });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error fetching data: " + err.stack);
      return res.status(500).send("An error occurred. Please try again.");
    }
    
    if (results.length > 0) {
      res.redirect('/index');
      
    } else {
      res.status(401).send("Invalid email or password.");
    }
  });
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// Route to fetch data from the database
app.get('/get-data', (req, res) => {
  const query = "SELECT id, name, email FROM users"; // Replace 'users' with your table name
  db.query(query, (err, results) => {
      if (err) {
          console.error("Error fetching data: " + err.stack);
          res.status(500).send("An error occurred while retrieving data.");
          return;
      }
      res.json(results); // Send the data as JSON
  });
});

app.post("/page1", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error fetching data: " + err.stack);
      return res.status(500).send("An error occurred. Please try again.");
    }
    
    if (results.length > 0) {
      res.redirect('/register1');
      
    } else {
      res.status(401).send("Invalid email or password.");
    }
  });
});
app.get("/register1", (req, res) => {
  res.sendFile(__dirname + "/register1.html");
});