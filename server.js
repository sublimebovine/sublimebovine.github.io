
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

// Initial connection 
const dbConfig = {
  host: 'localhost',
  user: 'root', // change if using a different user
  password: 'root', // replace with your actual password
  multipleStatements: true
};

const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL server.');

  // Create database if it doesn't exist
  connection.query('CREATE DATABASE IF NOT EXISTS login_db', (err) => {
    if (err) throw err;
    console.log('Database ensured: login_db');

    // Connect to login_db
    const db = mysql.createConnection({ ...dbConfig, database: 'login_db' });

    db.connect(err => {
      if (err) throw err;
      console.log('Connected to login_db');

      // Create users table if it doesn't exist
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        );
      `;

      db.query(createTableQuery, err => {
        if (err) throw err;
        console.log('Users table ensured.');
      });

      // Middleware & Routes
      app.use(bodyParser.urlencoded({ extended: true }));
      // Serve oublic assets from "public"
      app.use(express.static(path.join(__dirname, 'public')));

       // Serve index.html manually from "public" folder
       app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'index.html'));
       });


      app.post('/login', (req, res) => {
        const { username, password } = req.body;

        db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
          if (err) return res.status(500).send('Database error.');
          if (results.length === 0) return res.status(401).send('Invalid credentials.');

          const user = results[0];
            if (err) return res.status(500).send('Error hashing password.');
            bcrypt.compare(password, user.password, (err, result) => {
              if (result) {
                res.send('Login successful!');
              } else {
                res.status(401).send('Incorrect password.');
              }
            });
          
          
        });
      });

      app.post('/register', (req, res) => {
        const { username, password } = req.body;

        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) return res.status(500).send('Error hashing password.');

          const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
          db.query(insertQuery, [username, hashedPassword], (err) => {
            console.log(hashedPassword);
            if (err) {
              if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).send('Username already taken.');
              } else {
                return res.status(500).send('Database error.');
              }
            }
            res.send('Registration successful.');
          });
        });
      });
      app.get('/logout', (req, res) => {
        // In app you clear session or token here
        res.send('You have been logged out.');
      });

      app.get('/dashboard', (req, res) => {
  res.send('Welcome to your dashboard. (Simulated secure page)');
});

      app.get('/dashboard', (req, res) => {
  res.send('Welcome to your dashboard. (Simulated secure page)');
});

      app.get('/users', (req, res) => {
  db.query('SELECT username FROM users', (err, results) => {
    if (err) return res.status(500).send('Database error.');
    res.json(results);
  });
});

      app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});
      
  app.get('/location/:name', (req, res) => {
    const locationName = req.params.name;

    const query = 'SELECT name, Rating, Lat, Lon,Description FROM locations';
    db.query(query, [locationName], (err, results) => {

      if (results.length === 0) {
        return res.status(404).send('Location "${locationName}" not found.');
      }

      const location = results;
      res.json({
        results: results
      });
    });
  }); 

//reviews to go with reviews.html
      app.get('/reviews', (req, res) => {
  db.query('SELECT * FROM reviews ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('Error fetching reviews:', err);
      return res.status(500).send('Error fetching reviews.');
    }
    res.json(results);
  });
});

app.post('/addReview', (req, res) => {
  const { name, code, text, rating } = req.body;
  const username = 'test';

  const insertReview = `
    INSERT INTO reviews (User, Text, Rating, Code, Name)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(insertReview, [username, text, rating, code, name], (err, result) => {
    if (err) {
      console.error('Error adding review:', err);
      return res.status(500).send('Error adding review.');
    }
    res.send('Review added successfully.');
  });
});


      
      // Start server
      const PORT = 3000;
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    });
  });
});
