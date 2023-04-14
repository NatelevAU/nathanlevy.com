import { Button } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

import './Home.css';
import background from '../../images/backgrounds/Home.jpg';

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home: React.FC<{}> = () => {
  const SnakeLink: React.FC<{}> = props => <Link to="/snake" {...props} />;

  const SourceLink: React.FC<{}> = props => (
    <a
      href="https://github.com/NatelevAU/natelev"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );

  ReactGA.pageview(window.location.pathname);

  return (
    <div className="Home" style={sectionStyle}>
      <header className="Home-header">
        <h1> Coming soon... </h1>
        <Button
          color="primary"
          size="large"
          variant="contained"
          sx={{ margin: 2 }}
          component={SourceLink}
        >
          Source Code
        </Button>
      </header>
    </div>
  );
};

export default Home;
