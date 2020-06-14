import React from 'react';
import pavlo1 from '../../assets/images/pavlo1.jpg';
import './Header.css' ;

function header () {
    return(
<div className="header__div">
    <header className="header">
        <div className="container">
            <div className="header__top">
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__list-item">
                        <img src={pavlo1} className="menu__list-img" alt="pavlo" />
                        </li>
                        <li className="menu__list-item">
                            <a className="menu__list-linkedin"
                             href="https://www.linkedin.com/in/pavlo-pechenevskyi/">
                             My LinkedIn
                             </a>
                        </li>
                        <li className="menu__list-item">
                            <a className="menu__list-github" 
                            href="https://github.com/PechPavlo">
                            My Github
                            </a>
                        </li>
                        {/* <li className="menu__list-item">
                            <a className="menu__list-link" href="#">link</a>
                        </li>
                        <li className="menu__list-item">
                            <a className="menu__list-link" href="#">link</a>
                        </li> */}
                    </ul>
                </nav>
                <a className="header__phone" href="tel:+380506806838">+38(050)680-68-38</a>
            </div>
        </div>
    </header>
</div>
    );
};

export default header;