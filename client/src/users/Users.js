import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Jokes extends React.Component {
  state = {
    jokes: [],
  };

  render() {
    return (
      <>
        <h1>Jokes List</h1>
        <div>
          {this.state.jokes.map((j, index) => (
            <div>
              <h3>{index+1}</h3>
              <h3 key={index}>{j.joke}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }

  componentDidMount() {
    const endpoint = '/jokes';
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default requiresAuth(Jokes);
