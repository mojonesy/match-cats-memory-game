import React, { useEffect, useState } from "react";
import Lottie from "lottie-web";
import confetti from "../assets/confetti.json";
import "./FinishedOverlay.css";

function FinishedOverlay({ matched, setMatched, shuffleCards }) {
  const [victory, setVictory] = useState(false);

  const play = () => {
    Lottie.loadAnimation({
      container: document.querySelector("#confetti-animation"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: confetti
    });
  }

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
          <div className="overlay-text" onMouseOver={play}>
            <h2>Woohoo!</h2>
            <p>You matched the cats! Want to play again?</p>
            <button 
                className="overlay-restart-btn"
                onClick={handleClick}
                >
                Click to restart
            </button>
          </div>

          <div 
            id="confetti-animation" 
           />
        </div>}
      </>
    );
}

export default FinishedOverlay;