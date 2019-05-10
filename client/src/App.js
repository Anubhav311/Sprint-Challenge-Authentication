import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Users from './users/Users';
import styled from 'styled-components';

const ButtonNav = styled.button`
  background-color: pink;
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  color: white;
`

function App(props) {
  function logout() {
    localStorage.removeItem('jwt');
    props.history.push('/login');
  }

  return (
    <div className="App">
      <br></br>
      <header>
        <NavLink to="/signup"><ButtonNav>SignUp</ButtonNav></NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/login"><ButtonNav>LogIn</ButtonNav></NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users"><ButtonNav>Users</ButtonNav></NavLink>
        &nbsp;|&nbsp;
        <ButtonNav type="button" onClick={logout}>
          LogOut
        </ButtonNav>
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
