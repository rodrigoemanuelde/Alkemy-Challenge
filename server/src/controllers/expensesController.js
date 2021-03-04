const { db } = require('../config/db');

const addExpenses = (req, res) => {
  const { concept, amount, date, category } = req.body;

  db.query(
    'INSERT INTO expenses (concept, amount,date, category) VALUES (?,?,?,?)',
    [concept, amount, date, category],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result) {
        res.status(200).send({ message: 'Add expenses' });
      } else {
        res.send({ message: 'Not Added' });
      }
    }
  );
};

const allExpenses = (req, res) => {
  db.query('SELECT * FROM expenses', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  addExpenses,
  allExpenses,
};
