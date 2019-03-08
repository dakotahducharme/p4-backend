import React, { Component } from 'react';
import styled from 'styled-components'

const Heading = styled.header`
  width: 100%;
  padding-top: 20px;
  ul, li, h1 {
    display: inline;
  }
  li {
    padding: 0 20px;
  }
  h1 {
    padding-right: 100px;
  }
  a {
    text-decoration: none;
    ${'' /* color: white; */}
  }
`

const Header = () => {
  return (
    <Heading>
      <nav>
        <ul>
          <h1>example</h1>
          <li><a href="#">example</a></li>
          <li><a href="#">example</a></li>
          <li><a href="#">example</a></li>
        </ul>
      </nav>
    </Heading>
  );
}

export default Header;
