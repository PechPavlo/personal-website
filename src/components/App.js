import React from 'react';
import pavlo1 from '../assets/images/pavlo1.jpg';
import Header from './Header/Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
          Hey, there! I'm Pavlo!<br />
          How's it going?
          </p>
        {/* <img src={pavlo1} className="App-logo" alt="pavlo" /> */}
        <p>
          Here will be my personal Website! (soon:-)
        </p>
        <h3>Some of my pages:</h3>
        <a
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
        </a>
        <a
          className="App-link"
          href="https://pechpavlo.github.io/cappadocia/"
        >
          Learn HTML & CSS by making "Cappadocia" page
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
          Learning React by making movie-poster page
        </a>
        <p>Keep calm, and learn React!!!</p>
      </header>
    </div>
  );
}

export default App;
