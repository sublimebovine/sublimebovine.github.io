const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();


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

  connection.query('CREATE DATABASE IF NOT EXISTS login_db', (err) => {
    if (err) throw err;
    console.log('Database ensured: login_db');

    // Connect to login_db
    const db = mysql.createConnection({ ...dbConfig, database: 'login_db' });

    db.connect(err => {
      if (err) throw err;
      console.log('Connected to login_db');

      // Create users
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

      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.use(express.static(path.join(__dirname, 'public')));


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



//premium feature
const createEmailTableQuery = `
   CREATE TABLE IF NOT EXISTS emails (
     id INT AUTO_INCREMENT PRIMARY KEY,
     email VARCHAR(255) UNIQUE NOT NULL
   );
 `;
 
 db.query(createEmailTableQuery, err => {
   if (err) throw err;
   console.log('Emails table ensured.');
 });
 
 
 app.post('/submit_email', (req, res) => {
   const { email } = req.body;
 
   if (!email) {
     return res.status(400).send('Email is required.');
   }
 
   const insertEmailQuery = 'INSERT INTO emails (email) VALUES (?)';
   db.query(insertEmailQuery, [email], (err) => {
     if (err) {
       if (err.code === 'ER_DUP_ENTRY') {
         return res.status(400).redirect('/duplicate.html')
       } else {
         console.error('Database error:', err);
         return res.status(500).send('Database error.');
       }
     }
     res.redirect('/thankyou.html');
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

app.get('/reviews', (req, res) => {
  connection.query('USE login_db', (err) => {
    if (err) {
      console.error('Error switching database:', err);
      return res.status(500).send('Error switching database.');
    }
    connection.query('SELECT * FROM reviews ORDER BY id DESC', (err, results) => {
      if (err) {
        console.error('Error fetching reviews:', err);
        return res.status(500).send('Error fetching reviews.');
      }
      res.json(results);
    });
  });
});

app.post('/addReview', (req, res) => {
  const { name, code, text, rating } = req.body;
  const username = 'test';

  connection.query('USE login_db', (err) => {
    if (err) {
      console.error('Error switching database:', err);
      return res.status(500).send('Error switching database.');
    }
    const insertReview = `
      INSERT INTO reviews (User, Text, Rating, Code, Name)
      VALUES (?, ?, ?, ?, ?)
    `;
    connection.query(insertReview, [username, text, rating, code, name], (err, result) => {
      if (err) {
        console.error('Error adding review:', err);
        return res.status(500).send('Error adding review.');
      }
      res.send('Review added successfully.');
    });
  });
});


app.post('/api/forecast', (req, res) => {
  const { lat, lon, forecast, timestamp} = req.body;

  const query = 'INSERT INTO forecast (source, lat, lon, TIME, DATE) VALUES (?, ?, ?, ?, ?)';
  db.query(query, ['openweathermap', lat, lon, Math.floor(Date.now()/1000), timestamp], (err, results) => {
    if (err) {
      console.error('Error inserting forecast:', err);
      return res.status(500).send('Error inserting forecast data.');
    }
    res.json({ success: true, id: results.insertId });
  });
});

app.get('/api/forecast/:lat/:lon', (req, res) => {
  const { lat, lon } = req.params;
  
  const query = 'SELECT * FROM forecast WHERE Lat = ? AND Lon = ? ORDER BY TIME DESC LIMIT 1';
  db.query(query, [lat, lon], (err, results) => {
    if (err) {
      console.error('Error fetching forecast:', err);
      return res.status(500).send('Error fetching forecast data');
    }
    res.json(results[0] || { message: 'No forecast found' });
  });
});

app.get('/api/weather', async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/weather/forecast', async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


      const PORT = 3000;
      app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    });
  });
});
