// Landing pages

import LandingLayout from 'src/layouts/LandingLayout';
import About from 'src/pages/About/About';
import Home from 'src/pages/Home/Home';
import PageNotFound from 'src/pages/PageNotFound/PageNotFound';
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

// Page Not Found

const pageNotFound: PageConfig = {
  component: PageNotFound,
  layout: LandingLayout,
  name: 'Page Not Found',
  path: '/*',
};

export const pagesConfig: PageConfig[] = [homePage, aboutPage, resumePage, pageNotFound];

export const headerMiddlePages = [homePage, aboutPage, resumePage];
