import React from 'react';

import PlaySoundButton from './PlaySoundButton';

import './App.css';
import background from './images/backgrounds/Home.jpg';
import logo from './images/logos/Nathan.jpg';

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function App() {
  return (
    <div className="App" style={sectionStyle}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Nathan Levy </h1>
        <PlaySoundButton />
        <a
          className="App-link"
          href="https://github.com/NatelevAU/natelev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </header>
    </div>
  );
}

export default App;
