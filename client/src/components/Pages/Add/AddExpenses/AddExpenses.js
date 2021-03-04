import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';
import './addexpenses.css';

const AddExpenses = () => {
  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const addExpenses = () => {
    Axios.post('http://localhost:2626/addexpenses', {
      concept: concept,
      amount: amount,
      date: date,
      category: category,
    })
      .then((response) => {
        console.log(response);
        Swal.fire('Add expenses!', 'success');
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Not Added!', 'error');
      });
  };

  const Concept = (e) => {
    setConcept(e.target.value);
  };
  const Amount = (e) => {
    setAmount(e.target.value);
  };
  const Date = (e) => {
    setDate(e.target.value);
  };

  const Category = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div style={{ maxWidth: '80%', margin: '4rem auto' }}>
      <h1>Add Expenses</h1>
      <form>
        <div className='form-group row'>
          <label>Concept</label>
          <input
            type='text'
            placeholder='Add concept'
            className='form-control'
            onChange={Concept}
          ></input>
        </div>
        <div className='form-group row'>
          <label>Amount</label>
          <input
            type='number'
            placeholder='Add amount'
            className='form-control'
            onChange={Amount}
          ></input>
        </div>
        <div className='form-group row'>
          <label>Date</label>
          <input
            type='date'
            placeholder='Add Date'
            className='form-control'
            onChange={Date}
          ></input>
        </div>
        <div className='form-group row'>
          <label>Category</label>
          <input
            type='text'
            placeholder='Add Category'
            className='form-control'
            onChange={Category}
          ></input>
        </div>
        <button type='submit' className='btn btn-primary' onClick={addExpenses}>
          Add Expenses
        </button>
        <Link to='/expenses' className='btn btn-danger ml-5'>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddExpenses;
