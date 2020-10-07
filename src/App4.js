import React from "react";
import {
  BrowserRouter as Router,
//   Switch,
  Route,
//   Link,
  NavLink,
  withRouter
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
    const user = {name:'Thomas', surname:'Philips'}
  return (
   
      <div>
          <Router>
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
    

    <Route exact path="/" component={Home} />
            
    <Route exact path="/about" component={About} />

    <Route exact path="/users" render={() => <OtherUser user={user} /> } />

    </Router>
    </div>
  );
}

const SimpleH2 = props => <h2 {...props} />

const NiceH2 = styled(SimpleH2)`
    color: ${props => props.$color}
`;

const Home = (props) =>
console.log(props) ||
  <h2>Home</h2>;

  const About = (props) =>
  console.log(props) ||
    <h2>About</h2>;

// function About() {
//   return <NiceH2 $color={'red'}>About</NiceH2>;
// }

const OtherUser = (props) => <UserHoc {...props}/>


const Users = (props) =>
console.log(props) ||
  <h2>Users</h2>;


const UserHoc = withRouter(Users)





// function Users() {
//   return <h2>Users</h2>;
// }

// function NoMatch() {
//     return <h2>UPS 404</h2>;
//   }