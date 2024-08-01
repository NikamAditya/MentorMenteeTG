const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { connection } = require('./config/dbconfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Secret key for JWT
const SECRET_KEY = 'aditya';

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // console.log(email+":"+password);
  // console.log(req.body);
  const query = 'SELECT uid, type FROM login WHERE email = ? AND password = ?';

  connection.query(query, [email, password], async (err, user) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data from database.');
      return;
    }
    // && await bcrypt.compare(password, user.password)
    if (user) {
      const token = jwt.sign({ username: user.email }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token ,  user });
    } else {
      res.status(401).send('Invalid credentials');
    }
    // console.log( user );
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
