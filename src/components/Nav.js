import React from "react";
import styled from "styled-components";
import "./Nav.css";


const NAV = styled.nav`
  background-color: rgb(132, 89, 107, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 250ms ease-in-out;
`;
const UL = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  list-style: none;
  padding: 80px 40px;
  margin: 0 auto;
`;
const LI = styled.li`
  margin-bottom: 3em;
`;
const A = styled.a`
  text-decoration: none;
  color: var(--clr-light);
  font-size: 2em;

  &:hover {
    color: #3ca0cd;
  }
`;


const openNav = () => {
  document.body.classList.toggle("nav-open");
}

function Nav() {
    return (
      <header>
        <button 
          className="nav-toggle" 
          aria-label="toggle navigation"
          onClick={openNav}
          >
            <span className="hamburger"></span>
        </button>
        <NAV className="nav">
          <UL className="primary-nav flex">
            <LI className="active">
              <A href="/">
                <span aria-hidden="true"></span>Home
              </A>
            </LI>
            <LI>
              <A href="/cats">
                <span aria-hidden="true"></span>About the Cats
              </A>
            </LI>
            <LI>
              <A href="https://github.com/mojonesy/match-cats-memory-game">
                <span aria-hidden="true"></span>Source Code
              </A>
            </LI>
          </UL>
        </NAV>
      </header>
    );
}

export default Nav;