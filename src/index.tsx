import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import './index.css';

function App({}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
