const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('<h1>My Node App Working...</h1>')
});

app.listen(5000, () => {
  console.log('App listening on port 5000');
});
