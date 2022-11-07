import React from "react";
import "./Nav.css";


function Nav({ openModal }) {

  const openNav = () => {
    document.body.classList.toggle("nav-open");
  }

    return (
      <header>
        <button 
          className="nav-toggle" 
          aria-label="toggle navigation"
          onClick={openNav}
          >
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="primary-nav flex">
            <li className="active">
              <button className="nav-link" onClick={openNav}>
                <span aria-hidden="true"></span>Home
              </button>
            </li>
            <li>
              {/* made this link a button because it does not use an href */}
              <button className="nav-link" onClick={openModal}>
                <span aria-hidden="true"></span>About the Cats
              </button>
            </li>
            <li>
              <a 
                className="nav-link" 
                href="https://github.com/mojonesy/match-cats-memory-game">
                <span aria-hidden="true"></span>Source Code
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Nav;