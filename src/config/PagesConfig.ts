// Landing pages

import React from 'react';
import LandingLayout from 'src/layouts/LandingLayout';

const About = React.lazy(() => import('src/pages/About/About'));
const Experiments = React.lazy(() => import('src/pages/Experiments/Experiments'));
const TicTacToe = React.lazy(() => import('src/pages/Experiments/TicTacToe/TicTacToe'));
const Home = React.lazy(() => import('src/pages/Home/Home'));
const PageNotFound = React.lazy(() => import('src/pages/PageNotFound/PageNotFound'));
const Resume = React.lazy(() => import('src/pages/Resume/Resume'));

import { PageConfig } from './PagesConfigTypes';

const homePage: PageConfig = {
  component: Home,
  layout: LandingLayout,
  background: '/gradient.svg',
  name: 'Home',
  path: '/',
  redirectPaths: ['/home'],
};

const aboutPage: PageConfig = {
  component: About,
  layout: LandingLayout,
  background: '/gradient.svg',
  name: 'About',
  path: '/about',
  longName: 'About Me',
};

const resumePage: PageConfig = {
  component: Resume,
  layout: LandingLayout,
  name: 'Resume',
  path: '/resume',
  maxWidth: true,
};

const experimentsPage: PageConfig = {
  component: Experiments,
  layout: LandingLayout,
  background: '/gradient.svg',
  name: 'Experiments',
  path: '/experiments',
};

const ticTacToePage: PageConfig = {
  component: TicTacToe,
  layout: LandingLayout,
  name: 'Tic Tac Toe',
  path: '/experiments/tictactoe',
};

// Page Not Found

const pageNotFound: PageConfig = {
  component: PageNotFound,
  layout: LandingLayout,
  name: 'Page Not Found',
  path: '/*',
};

export const pagesConfig: PageConfig[] = [
  homePage,
  aboutPage,
  resumePage,
  experimentsPage,
  ticTacToePage,
  pageNotFound,
];

export const headerMiddlePages = [homePage, aboutPage];
