// Landing pages

import LandingLayout from 'src/layouts/LandingLayout';
import About from 'src/pages/About/About';
import Home from 'src/pages/Home/Home';
import PageNotFound from 'src/pages/PageNotFound/PageNotFound';
import Portfolio from 'src/pages/Portfolio/Portfolio';
import Resume from 'src/pages/Resume/Resume';

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

const portfolioPage: PageConfig = {
  component: Portfolio,
  layout: LandingLayout,
  background: '/gradient.svg',
  name: 'Portfolio',
  path: '/portfolio',
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
  portfolioPage,
  pageNotFound,
];

export const headerMiddlePages = [homePage, aboutPage, resumePage, portfolioPage];
