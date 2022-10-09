import React from "react";
import "./Nav.css";


function Nav() {

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
              <a className="nav-link" href="/">
                <span aria-hidden="true"></span>Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/cats">
                <span aria-hidden="true"></span>About the Cats
              </a>
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