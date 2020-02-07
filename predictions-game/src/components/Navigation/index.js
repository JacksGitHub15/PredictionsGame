import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <React.Fragment>
    
    <h1 class="h3 mb-3 font-weight-normal, text-center">Premier League Predictions Game</h1>
    <hr />
    <div class="h3 mb-3 font-weight-normal, text-center">
      <Link to={ROUTES.SIGN_IN}>Sign In Here</Link>
      <p></p>
      <Link to={ROUTES.SIGN_UP}>Or If You'd Like To Sign Up</Link>
    </div>
  </React.Fragment>
);

export default Navigation;