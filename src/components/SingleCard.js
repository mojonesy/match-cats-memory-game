import React from "react";
import './SingleCard.css';

function SingleCard({ card, cover, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  }

    return (
        <div className="card">
        {/* If the flipped prop is set to true, apply the "flipped" class */}
         <div className={flipped ? "flipped" : ""}>
           <img className="front" src={card.src} alt="card front" />
           <img 
            className="back" 
            src={cover} 
            alt="card back" 
            onClick={handleClick} 
            />
         </div>
        </div>
    );
}

export default SingleCard;