import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Spin from './pages/Spin/Spin';

import './index.css';

function App({}) {
  const HomeRedirect: React.FC<{}> = props => <Redirect to="/" {...props} />;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={HomeRedirect} />
        <Route exact path="/spin" component={Spin} />
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
