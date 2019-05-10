import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Users from './users/Users';

function App(props) {
  function logout() {
    localStorage.removeItem('jwt');
    props.history.push('/login');
  }

  return (
    <div className="App">
      <br></br>
      <header>
        <NavLink to="/signup"><button>SignUp</button></NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/login"><button>LogIn</button></NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users"><button>Users</button></NavLink>
        &nbsp;|&nbsp;
        <button type="button" onClick={logout}>
          LogOut
        </button>
      </header>
      <main>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </div>
  );
}

export default withRouter(App);
