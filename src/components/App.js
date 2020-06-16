import React from 'react';
import pavlo1 from '../assets/images/pavlo1.jpg';
import Header from './Header/Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h3 className="App-header__title" >
          Hey, there! I'm Pavlo!<br />
          <span> How's it going?</span>
        </h3>
        {/* <img src={pavlo1} className="App-logo" alt="pavlo" /> */}
        <p>
          Here will be my personal Website! (soon:-)
        </p>
        <h3>Some of my pages:</h3>
        {/* <a
          className="App-link"
          href="https://www.linkedin.com/in/pavlo-pechenevskyi/"
        >
          My LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/PechPavlo"
        >
          My Github
        </a> */}
        <a
          className="App-link"
          href="https://pechpavlo.github.io/cappadocia/"
        >
          Learn HTML & CSS by making <span>"Cappadocia"</span> page
        </a>
        <a
          className="App-link"
          href="https://pechpavlo.github.io/game-of-life/"
        >
          Learn JavaScript by making <span>
            "Game of Life"</span> page
        </a>
        <a
          className="App-link"
          href="https://pechpavlo.github.io/HomeWork-9/"
        >
          Homework in LemonSchool
        </a>
        <a
          className="App-link"
          href="http://PechPavlo.github.io/movie-posters"
        >
          Learning React by making<span>
            "Movie poster"</span> page
        </a>
        <p>Keep calm, and learn React!!!</p>
      </header>
    </div>
  );
}

export default App;
