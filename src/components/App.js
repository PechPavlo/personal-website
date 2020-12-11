import React from 'react';
// import pavlo1 from '../assets/images/pavlo1.jpg';
import Header from './Header/Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-section">
        <h3 className="App-section__title" >
          Hey, there! I'm Pavlo!<br /> <br />
          <span> How's it going?</span>
        </h3>
        {/* <img src={pavlo1} className="App-logo" alt="pavlo" /> */}
        <p>
          It is my personal Website!
        </p>
        <p>
          I am a Junior JavaScript Front-End developer seeking an entry-level position with Company to use my skills in coding. <br />
           I am going to start working as a Junior Front-End Developer in IT product this year.<br />
            My goal to be in a space, where people do huge useful things and make high demands on themselves.
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
          href="https://github.com/PechPavlo/tasks/blob/master/tasks/rslang/english-for-kids-translated.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript, HTML & CSS by making <span>"English for kids"  </span> task at "Rsschool".
        </a>
        <a
          className="App-link last"
          href="https://rolling-scopes-school.github.io/pechpavlo-JS2020Q3/english-for-kids/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>"English for kids"  </span> page.
        </a>
        <a
          className="App-link"
          href="https://github.com/PechPavlo/tasks/blob/master/tasks/gem-pazzle/codejam-the-gem-puzzle.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript, HTML & CSS by making <span>"Gem-puzzle"  </span> task at "Rsschool".
        </a>
        <a
          className="App-link last"
          href="https://rolling-scopes-school.github.io/pechpavlo-JS2020Q3/gem-puzzle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>"Gem-puzzle"  </span> page.
        </a>
        <a
          className="App-link"
          href="https://github.com/PechPavlo/tasks/blob/master/tasks/virtual-keyboard/virtual-keyboard-en.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript, HTML & CSS by making <span>"Virtual Keyboard"  </span> task at "Rsschool".
        </a>
        <a
          className="App-link last"
          href="https://rolling-scopes-school.github.io/pechpavlo-JS2020Q3/virtual-keyboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>"Virtual Keyboard"  </span> page.
        </a>
        <a
          className="App-link"
          href="https://github.com/PechPavlo/tasks/blob/master/tasks/markups/level-2/shelter/shelter-cross-check-ru.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript, HTML & CSS by making <span>"Shelter"  </span> task at "Rsschool".
        </a>
        <a
          className="App-link last"
          href="https://rolling-scopes-school.github.io/pechpavlo-JS2020Q3/shelter/pages/main/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>"Shelter"  </span> page.
        </a>
        <a
          className="App-link"
          href="https://github.com/PechPavlo/tasks/blob/master/tasks/ready-projects/momentum.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript, HTML & CSS by making <span>"Momentum"  </span> task at "Rsschool".
        </a>
        <a
          className="App-link last"
          href="https://rolling-scopes-school.github.io/pechpavlo-JS2020Q3/momentum/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>"Momentum"  </span> page.
        </a>
        <a
          className="App-link"
          href="https://github.com/PechPavlo/tasks/blob/master/tasks/ready-projects/calculator.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript, HTML & CSS by making <span>"Calculator"  </span> task at "Rsschool".
        </a>
        <a
          className="App-link last"
          href="https://rolling-scopes-school.github.io/pechpavlo-JS2020Q3/calculator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>"Calculator"  </span> page.
        </a>
        <a
          className="App-link"
          href="https://github.com/PechPavlo/tasks/blob/master/tasks/ready-projects/virtual-keyboard.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript  by making <span>"Virtual-keyboard"  </span> task at "Rsschool".
        </a>
        <a
          className="App-link last"
          href="https://rolling-scopes-school.github.io/pechpavlo-JS2020Q3/virtual-keyboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>"Virtual-keyboard"  </span> page.
        </a>

        <a
          className="App-link"
          href="https://github.com/PechPavlo/tasks/blob/master/tasks/markups/level-1/webdev/webdev-ru.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn HTML & CSS by making <span>"Webdev"</span> task at "Rsschool".
        </a>
        <a
          className="App-link last"
          href="https://rolling-scopes-school.github.io/pechpavlo-JS2020Q3/webdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>"Webdev"</span> page.
        </a>
        <a
          className="App-link last"
          href="https://pechpavlo.github.io/cappadocia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn HTML & CSS by making <span>"Cappadocia"</span> page
        </a>
        <a
          className="App-link last"
          href="https://pechpavlo.github.io/game-of-life/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn JavaScript by making <span>
            "Game of Life"</span> page
        </a>
        {/* <a
          className="App-link last"
          href="https://pechpavlo.github.io/HomeWork-9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homework in LemonSchool
        </a>
        <a
          className="App-link last"
          href="http://PechPavlo.github.io/movie-posters"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React by making<span>
            "Movie poster"</span> page
        </a>
        <p>Keep calm, and learn React!!!</p> */}
      </section>
    </div>
  );
}

export default App;
