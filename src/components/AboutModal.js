import React, { useState } from "react";
import "./AboutModal.css";
import { Icon } from '@iconify/react';

function AboutModal({ data }) {

  const closeModal = () => {
    document.body.classList.toggle("modal-open");
  }

  return (
    <div className="about-modal">
      <div className="modal-header">
        <button 
            className="close-modal-btn" 
            aria-label="toggle about cats modal"
            onClick={closeModal}
            >
          X
        </button>
        <h2 className="modal-title">
          <span className="modal-title-text">About the Cats</span>
          <Icon icon="fluent-emoji-flat:kissing-cat" className="cat-icon"/>
        </h2>
      </div>
      <div className="carousel">
        <p>{data[0].name}</p>
      </div>
    </div>
  );
}

export default AboutModal;