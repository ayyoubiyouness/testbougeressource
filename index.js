const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, from local!');
});

app.get('/youness', (req, res) => {
    res.send('Hello, youness!');
  });


  app.get('/anas', (req, res) => {
    res.send('Hello, anas!');
  });
  // just a comment
  // an other comment

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});