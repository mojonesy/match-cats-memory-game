import React, { useState } from 'react';
import './Home.css';

const cardImages = [
    { "src": "./cat-photos/abyssinian.jpg" },
    { "src": "./cat-photos/birman.jpg" },
    { "src": "./cat-photos/chantilly.jpg" },
    { "src": "./cat-photos/chartreux.jpg" },
    { "src": "./cat-photos/devonrex.jpg" },
    { "src": "./cat-photos/mainecoon.jpg" },
    { "src": "./cat-photos/manx.jpg" },
    { "src": "./cat-photos/ragamuffin.jpg" },
    { "src": "./cat-photos/ragdoll.jpg" },
    { "src": "./cat-photos/russianblue.jpg" },
  ];

function Home() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffled);
      setTurns(0);
  }


  return (
    <div className="App">
      <h1>Match Cats!</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default Home;