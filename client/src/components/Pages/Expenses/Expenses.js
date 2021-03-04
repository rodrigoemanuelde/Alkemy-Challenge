import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Expenses = () => {
  const [allExpenses, setAllExpenses] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:2626/allexpenses').then((response) => {
      setAllExpenses(response.data);
    });
  }, []);

  return (
    <div className='container' style={{ maxWidth: '90%', margin: '4rem auto' }}>
      <h1>Expenses</h1>
      <table className='table'>
        <thead className='thead-dark'>
          <tr className='row justify-content-center'>
            <th className='col p-4 '>Concept</th>
            <th className='col p-4 '>Amount</th>
            <th className='col p-4 '>Date</th>
            <th className='col p-4 '>Category</th>

            <th className='col'>
              <Link to='/addexpenses' className='btn btn-primary'>
                Add Expenses
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {allExpenses.map((value, key) => {
            const { id_expenses, concept, amount, category, date } = value;
            return (
              <tr className='row justify-content-center' key={id_expenses}>
                <td className='col p-4 '>{concept}</td>
                <td className='col p-4 '>{amount}</td>
                <td className='col p-4 '>{date}</td>
                <td className='col p-4 '>{category}</td>

                <td>
                  <Link to='/editexpenses/:id' className='btn btn-warning'>
                    Edit
                  </Link>
                </td>

                <td>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
