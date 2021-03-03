import './App.css';
import NavBar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from './components/Pages/Home/Home';
import Expenses from './components/Pages/Expenses/Expenses';
import Incomes from './components/Pages/Incomes/Incomes';
import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className='pages'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/expenses' component={Expenses} />
            <Route exact path='/incomes' component={Incomes} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
