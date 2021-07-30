import React from 'react';

import './Home.css';
import background from '../../images/backgrounds/Home.jpg';

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home = () => {
  return (
    <div className="Home" style={sectionStyle}>
      <header className="Home-header">
        <h1> Coming soon... </h1>
        <a
          className="Home-link"
          href="https://github.com/NatelevAU/natelev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </header>
    </div>
  );
};

export default Home;
