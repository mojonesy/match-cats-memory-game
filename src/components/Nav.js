import React from "react";
import "./Nav.css";

function Nav() {
    return (
      <nav>
        <ul className="primary-nav flex">
          <li className="active" />
            <a href="/">
              <span aria-hidden="true"></span>Home
            </a>
          <li />
            <a href="/cats">
              <span aria-hidden="true"></span>About the Cats
            </a>
          <li />
            <a href="https://github.com/mojonesy/match-cats-memory-game">
              <span aria-hidden="true"></span>Source Code
            </a>
        </ul>
      </nav>
    );
}

export default Nav;