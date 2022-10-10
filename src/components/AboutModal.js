import React from "react";
import "./AboutModal.css";

function AboutModal() {

  const closeModal = () => {
    document.body.classList.toggle("modal-open");
  }
 
  return (
    <div className="about-modal">
      <button 
          className="close-modal-btn" 
          aria-label="toggle about cats modal"
          onClick={closeModal}
          >
        X
      </button>
      <h2>Hello Modal.</h2>
    </div>
  );
}

export default AboutModal;