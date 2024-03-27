// Landing pages

import LandingLayout from '../layouts/LandingLayout';
import About from '../pages/About';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Resume from '../pages/Resume';
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
