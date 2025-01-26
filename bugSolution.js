const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use Promises to handle the asynchronous operation and catch potential errors
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Database error!'));
      } else {
        resolve();
      }
    }, 1000);
  })
    .then(() => {
      res.send('Hello!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error'); // Handle the error appropriately 
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});