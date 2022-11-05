import "./FinishedOverlay.css";

function FinishedOverlay() {
    return (
        <div id="overlay" className="overlay">
          <div className="overlay-text">
            <h2>Woohoo!</h2>
            <p>You matched the cats! Want to play again?</p>
            <button 
                className="overlay-restart-btn"
                >
                Click to restart
            </button>
          </div>
        </div>
    );
}

export default FinishedOverlay;