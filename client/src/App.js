import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//Navbar
import NavBar from './components/NavBar/Navbar';

//Pages
import Home from './components/Pages/Home/Home';
import Expenses from './components/Pages/Expenses/Expenses';
import Incomes from './components/Pages/Incomes/Incomes';
import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Login/Login';

//Add
import AddExpenses from './components/Pages/Add/AddExpenses/AddExpenses';
import AddIncomes from './components/Pages/Add/AddIncomes/AddIncomes';

//Edit
import EditExpenses from './components/Pages/Edit/EditExpenses/EditExpenses';
import EditIncomes from './components/Pages/Edit/EditIncomes/EditIncomes';

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/expenses' component={Expenses} />
          <Route path='/incomes' component={Incomes} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/addexpenses' component={AddExpenses} />
          <Route path='/addincomes' component={AddIncomes} />
          <Route path='/editexpenses/:id' component={EditExpenses} />
          <Route path='/editincomes/:id' component={EditIncomes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
