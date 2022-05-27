import React, { useState, useEffect } from 'react';
import SingleCard from './SingleCard';
import './Home.css';
// Images
import cover from "../cat-photos/match_cat_cover.png";
import abyssinian from "../cat-photos/abyssinian.png";
import birman from "../cat-photos/birman.jpg"
import chantilly from "../cat-photos/chantilly.jpg"
import chartreux from "../cat-photos/chartreux.jpg"
import devonrex from "../cat-photos/devonrex.png"
import mainecoon from "../cat-photos/mainecoon.jpg"
import manx from "../cat-photos/manx.jpg"
import ragamuffin from "../cat-photos/ragamuffin.jpg"
import ragdoll from "../cat-photos/ragdoll.jpg"
import russianblue from "../cat-photos/russianblue.jpg"

const cardImages = [
  { src: abyssinian, matched: false },
  { src: birman, matched: false },
  { src: chantilly, matched: false },
  { src: chartreux, matched: false },
  { src: devonrex, matched: false },
  { src: mainecoon, matched: false },
  { src: manx, matched: false },
  { src: ragamuffin, matched: false },
  { src: ragdoll, matched: false },
  { src: russianblue, matched: false }
];

function Home() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      shuffled.sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setCards(shuffled)
    setTurns(0)
  }
  // Set new game on home load
  useEffect(() => {
    shuffleCards();
  }, []);

  // Handle a choice
  const handleChoice = (card) => {
    // If choiceOne is not null, setChoiceTwo. If it is null, setChoiceOne
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // Compare two selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo) {

      if(choiceOne.src === choiceTwo.src) {
        console.log("matched.");
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card;
            }
          })
        })
        resetTurn();
      } else {
        
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo])
  console.log(cards);

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }


  return (
    <>
      <h1>Match Cats!</h1>
      <button onClick={shuffleCards}>New Game</button>
    
      <div className="card-grid">
        {cards.map(card => {
          return (
            <SingleCard
              key={card.id} 
              card={card.src} 
              cover={cover}
              handleChoice={handleChoice} 
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;