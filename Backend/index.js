const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const {connection} = require('./config/dbConfig');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM login WHERE email = ? AND password = ?';

  connection.query(query, [email, password], (err, result) => {
      if (err) {
          console.error('Error fetching data:', err);
          res.status(500).send('Error fetching data from database.');
          return;
      }
      console.log(result);
      res.json(result);
  });
});

// app.get('/data', (req, res) => {
//   const query = 'SELECT * FROM login';

//   let email1 = "adityanik@gmail.com";
//   let password1 = "12345";

//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching data:', err);
//       res.status(500).send('Error fetching data from database.');
//       return;
//     }
//     for (const item of results) {
//       if(item.email == email1 && item.pass ==password1){
//         console.log("Login succesful"); 
//         break;
//       }
//     }
//     res.json(results);
//   });
// });

// app.get('/data1', (req, res) => {
//   const query = 'INSERT INTO login VALUES("suyash@gmail.com","123456")';

//   connection.query(query, (err, results) => {
    // if (err) {
    //   console.error('Error fetching data:', err);
    //   res.status(500).send('Error fetching data from database.');
    //   return;
    // }
    // res.json(results);
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
