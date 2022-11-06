import React, { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Icon } from "@iconify/react";
import "./FinishedOverlay.css";

function FinishedOverlay({ matched, setMatched, shuffleCards }) {
  const [victory, setVictory] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (matched === 9){
      setVictory(true);
      setIsExploding(true);
    }

  }, [matched])

  const handleClick = () => {
    setVictory(false);
    setMatched(0);
    shuffleCards();
    setIsExploding(false);
  }

    return (
      <>
        {victory &&
          <div id="overlay" className="overlay">
          <div className="overlay-text">
            <div className="overlay-heading">
              <h2>Woohoo!</h2>
              <Icon className="cat-icon-smile" icon="fluent-emoji:grinning-cat-with-smiling-eyes" />
            </div>
            <p>You matched the cats! Want to play again?</p>
            <button 
                className="overlay-restart-btn"
                onClick={handleClick}
                >
                Click to restart
            </button>
          </div>

          <div className="confetti" style={{transform: "translateX(50%)"}}>
            <ConfettiExplosion 
              force={0.6}
              duration={5000}
              particleCount={200}
              height={1600}
              width={1600}
              colors={['#4C86A8', '#477890', '#56334E', '#84596B', '#000', '#fff']}
            />
          </div>
        </div>}
      </>
    );
}

export default FinishedOverlay;