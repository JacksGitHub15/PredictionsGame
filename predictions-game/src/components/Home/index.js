import React from 'react';
import { withAuthorization } from '../Session';
import GamesTable from '../App/GamesTable';

const HomePage = () => (
  <div>
    <GamesTable />
  </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);