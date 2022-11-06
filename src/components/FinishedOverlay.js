import React, { useEffect, useState } from "react";
import "./FinishedOverlay.css";

function FinishedOverlay({ matched, setMatched, shuffleCards }) {
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    if (matched === 1){
      setVictory(true);
    }

  }, [matched])

  const handleClick = () => {
    setVictory(false);
    setMatched(0);
    shuffleCards();
  }

    return (
      <>
        {victory &&
          <div id="overlay" className="overlay">
          <div className="overlay-text">
            <h2>Woohoo!</h2>
            <p>You matched the cats! Want to play again?</p>
            <button 
                className="overlay-restart-btn"
                onClick={handleClick}
                >
                Click to restart
            </button>
          </div>
        </div>}
      </>
    );
}

export default FinishedOverlay;