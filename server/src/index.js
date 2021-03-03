const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 2626;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Alekemy Challenge');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
