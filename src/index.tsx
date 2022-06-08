import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Dice from './pages/Dice/Dice';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import './index.css';

const App = ({}) => {
  const TRACKING_ID = 'UA-204322935-1';

  const HomeRedirect: React.FC<{}> = props => <Redirect to="/" {...props} />;
  const AboutRedirect: React.FC<{}> = props => <Redirect to="/about" {...props} />;

  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dice" component={Dice} />
        <Route path="/home" component={HomeRedirect} />
        <Route path="/humans.txt" component={AboutRedirect} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
