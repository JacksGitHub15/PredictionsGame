import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { AuthUserContext } from '../Session';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />}
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <header bg="primary">
    <h1 className="h3 mb-3 font-weight-normal, text-center">Premier League Predictions Game</h1>
    <div className="text-left">
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
      {!!authUser.roles[ROLES.ADMIN] && (
        <Link to={ROUTES.ADMIN}>Admin</Link>
      )}
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