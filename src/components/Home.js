import React, { useState, useEffect } from 'react';
import SingleCard from './SingleCard';
import FinishedOverlay from './FinishedOverlay';
import './Home.css';

// Images
const cover = './images/match_cat_cover.png';
const cardImages = [
  // { "src": './images/abyssinian.png', matched: false },
  // { "src": './images/birman.jpg', matched: false },
  // { "src": './images/chantilly.jpg', matched: false },
  // { "src": './images/chartreux.jpg', matched: false },
  // { "src": './images/devonrex.png', matched: false },
  // { "src": './images/mainecoon.jpg', matched: false },
  // { "src": './images/manx.jpg', matched: false },
  // { "src": './images/ragamuffin.jpg', matched: false },
  // { "src": './images/ragdoll.jpg', matched: false },
  { "src": './images/russianblue.jpg', matched: false }
];

function Home() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [matched, setMatched] = useState(0);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffled);
    setTurns(0);
  }
  // Set new game on home load
  useEffect(() => {
    shuffleCards();
  }, []);

  // Handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // Compare two selected cards. Wait 1.5s before turning back over if they do not match.
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        console.log('matched.')
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              setMatched(matched + 1);
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        });
        resetTurn();
      } else {
        console.log('not matched.')
        setTimeout(() => {
          resetTurn();
        }, 1050);
      }
    }
  }, [choiceOne, choiceTwo]);
  // console.log(cards);

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }


  return (
    <div className="container">
      <div className="text">
        <h1 className="title">Match Cats!</h1>
        <button className="new-game-btn" onClick={shuffleCards}>New Game</button>
        <p className="turns-text">Turns: {turns}</p>
      </div>

      <div className="card-grid">
        {cards.map((card, i) => {
          return (
            <SingleCard
              key={i} 
              card={card} 
              cover={cover}
              handleChoice={handleChoice} 
              flipped={ card === choiceOne || card === choiceTwo || card.matched === true }
              disabled={disabled}
            />
          );
        })}
      </div>

      <FinishedOverlay 
        matched={matched} 
        setMatched={setMatched}
        shuffleCards={shuffleCards}
      />

      <div className="footer">
        <footer>
          © Molly Jones 2022
        </footer>
      </div>
    </div>
  );
}

export default Home;