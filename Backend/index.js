const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const {connection} = require('./config/dbconfig');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT uid,type FROM login WHERE email = ? AND password = ?';

  connection.query(query, [email, password], async(err, result) => {
    if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data from database.');
        return;
    }

    if (result && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token },{result});
  } else {
      res.status(401).send('Invalid credentials');
  }
    console.log(result);
});
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
