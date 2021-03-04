const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 2626;
const {
  addExpenses,
  allExpenses,
} = require('./controllers/expensesController');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Alekemy Challenge');
});

//Expenses
app.post('/addexpenses', addExpenses);
app.get('/allexpenses', allExpenses);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
