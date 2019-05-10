import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ButtonSubmit = styled.button`
  background-color: pink;
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  color: white;
`

const InputField = styled.input`
  width: 250px;
  height: 30px;
  margin-bottom: 15px;
  background-color:lightblue;
  border: none;
  border-radius: 5px;
  padding: 7px;
  font-size: 20px;
  font-weight: bold;
`

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="username" />
            <InputField
              id="username"
              placeholder="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <InputField
              id="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <br></br>
          <div>
            <ButtonSubmit type="submit">Submit</ButtonSubmit>
          </div>
        </form>
      </>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  submitForm = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:3300/api/login';

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        console.error('Login Error', err);
        this.setState({
          username: '',
          password: ''
        });
        alert('Wrong Credentials');
      });
  };
}

export default Login;
