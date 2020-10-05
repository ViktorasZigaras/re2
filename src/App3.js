import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
//   Link,
  NavLink
} from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
color: green;
text-decoration: none;
transition: all 0.2s;
font-weight: bold;
border-bottom: 1px solid transparent;
&:hover {
    color: orange;
}
&.selected {
    border-bottom: 1px solid white;
}
`;

const Nav = styled.nav`
    background: gray;
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 20px;
        li {
            padding: 5px;
        }
    }
`;

export default function App() {
  return (
    <Router>
      <div>
        <Nav>
          <ul>
            <li>
              <StyledLink exact to="/" activeClassName="selected">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/about" activeClassName="selected">About</StyledLink>
            </li>
            <li>
              <StyledLink to="/users" activeClassName="selected">Users</StyledLink>
            </li>
          </ul>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const SimpleH2 = props => <h2 {...props} />

const NiceH2 = styled(SimpleH2)`
    color: ${props => props.$color}
`;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <NiceH2 $color={'red'}>About</NiceH2>;
}

function Users() {
  return <h2>Users</h2>;
}

function NoMatch() {
    return <h2>UPS 404</h2>;
  }