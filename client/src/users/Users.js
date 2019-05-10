import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import requiresAuth from '../auth/requiresAuth';

const JokesDiv = styled.div`
  background-color: #4D7EA8;
  height: 50px;
  display: flex;
  width: 70%;
  margin: auto;
  align-items: center;
  text-align: left;
  padding: 50px;
  color: white;
  border-bottom: 2px solid white;
`

const SnoHeaderTag = styled.h3`
  margin: 0 50px 0 0;
`

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
            <JokesDiv key={index}>
              <SnoHeaderTag>{index+1}</SnoHeaderTag>
              <h3>{j.joke}</h3>
            </JokesDiv>
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
