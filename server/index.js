const express = require('express');
const path = require('path');
const fileRoute = require('./routes/file');
const authRoute = require('./routes/auth');
const newsRoute = require('./routes/news'); // Add this line
const cors = require('cors');
require('./db/db');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);
app.use(authRoute);
app.use(newsRoute); // Add this line

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(3030, () => {
  console.log('server started on port 3030');
});
