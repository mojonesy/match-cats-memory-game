import React, { useState, useEffect } from 'react';
import './Home.css';
// Images
import cover from "./cat-photos/match_cat_cover.png";
import abyssinian from "./cat-photos/abyssinian.jpg";
import birman from "./cat-photos/birman.jpg"
import chantilly from "./cat-photos/chantilly.jpg"
import chartreux from "./cat-photos/chartreux.jpg"
import devonrex from "./cat-photos/devonrex.png"
import mainecoon from "./cat-photos/mainecoon.jpg"
import manx from "./cat-photos/manx.jpg"
import ragamuffin from "./cat-photos/ragamuffin.jpg"
import ragdoll from "./cat-photos/ragdoll.jpg"
import russianblue from "./cat-photos/russianblue.jpg"

const cardImages = [abyssinian, birman, chantilly, chartreux, devonrex, mainecoon, manx, ragamuffin, ragdoll, russianblue];

function Home() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      shuffled.sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffled)
    setTurns(0)
  }
  // Set home view
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <h1>Match Cats!</h1>
      <button onClick={shuffleCards}>New Game</button>
    
      <div className="card-grid">
        {cards.map(card => (
            <div className="card" key={card.id}>
             <div>
               <img className="front" src={card} alt="card front" />
               <img className="back" src={cover} alt="card back" />
             </div>
            </div>    
        ))}
      </div>
    </>
  );
}

export default Home;