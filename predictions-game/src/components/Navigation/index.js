import React from 'react';
import { Link } from 'react-router-dom';
//eslint-disable-next-line
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import 'bootstrap/dist/css/bootstrap.min.css';
//eslint-disable-next-line
import Navbar from 'react-bootstrap/Navbar';
//eslint-disable-next-line
import Nav from 'react-bootstrap/Nav';
//eslint-disable-next-line
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <header className="background-color: 'blue'">
    <h1 className="h3 mb-3 font-weight-normal, text-center">Premier League Predictions Game</h1>
    <div className="text-left">
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </div>
    <SignOutButton />
  </header>
);

const NavigationNonAuth = () => (
  <React.Fragment>
    <h1 className="h3 mb-3 font-weight-normal, text-center">Premier League Predictions Game</h1>
    <hr />
    <div className="h3 mb-3 font-weight-normal, text-center">
      <Link to={ROUTES.SIGN_IN}>Sign In Here</Link>
      <p></p>
      <Link to={ROUTES.SIGN_UP}>Or If You'd Like To Sign Up</Link>
    </div>
  </React.Fragment>
);

export default Navigation;