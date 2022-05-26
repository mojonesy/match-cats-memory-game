import React from "react";
import './SingleCard.css';

function SingleCard({ card, cover }) {
    return (
        <div className="card">
             <div>
               <img className="front" src={card} alt="card front" />
               <img className="back" src={cover} alt="card back" />
             </div>
            </div>
    );
}

export default SingleCard;