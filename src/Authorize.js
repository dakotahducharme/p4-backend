import React, { Component } from 'react';
import styled from 'styled-components'

const Authorization = styled.div`
  background-color: lavender;
  width: 200px;
  padding: 20px 0 40px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 20px;
  input, button  {
    border-radius: 10px;
    border: none;
  }
  button:hover {
    color: white;
    background-color: black;
  }
`

class Authorize extends Component {
  render() {
    return(
      <Authorization>
          <form>
            <h2>sign in</h2>
            <input type="text" placeholder=" username"></input><br/>
            <input type="password" placeholder=" password"></input><br/>
            <button type="submit">submit</button>
          </form>
      </Authorization>
    )
  }
}

export default Authorize;
