import React from 'react';

import PlaySoundButton from '../../PlaySoundButton';

import './Home.css';
import background from '../../images/backgrounds/Home.jpg';
import logo from '../../images/logos/Nathan.jpg';

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
        <img src={logo} className="Home-logo" alt="logo" />
        <h1> Nathan Levy </h1>
        <PlaySoundButton />
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
