import React from'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import PredictGames from './components/predictGames.jsx';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

const element = <h1>Learning</h1>;
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();