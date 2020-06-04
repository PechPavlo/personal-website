import React from 'react';
import pavlo1 from '../assets/img/pavlo1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Hey, there! I'm Pavlo!<br/>
          How's it going?
          </p>
        <img src={pavlo1} className="App-logo" alt="pavlo" />
        <p>
          Here will be my personal Website! (soon:-)
        </p>
        <h3>Some my pages:</h3>
        <a
          className="App-link"
          href="https://pechpavlo.github.io/cappadocia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn HTML & CSS by making Cappadocia page
        </a>
        <a
          className="App-link"
          href="https://pechpavlo.github.io/HomeWork-9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homework in LemonSchool
        </a>
        <a
          className="App-link"
          href="http://PechPavlo.github.io/movie-posters"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React by making movie-poster page
        </a>
        <a
          className="App-link"
          href="http://PechPavlo.github.io/udemy-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          test page
        </a>
        <p>Keep calm, and learn React!!!</p>
      </header>
    </div>
  );
}

export default App;
