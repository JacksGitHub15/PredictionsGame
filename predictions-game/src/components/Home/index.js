import React from 'react';
import { withAuthorization } from '../Session';
import PredictGames from '../App/predictGames';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <PredictGames />
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);