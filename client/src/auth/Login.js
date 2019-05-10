import React from 'react';
import axios from 'axios';

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
            <input
              id="username"
              placeholder="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <br></br>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
    console.log(this.state)
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
