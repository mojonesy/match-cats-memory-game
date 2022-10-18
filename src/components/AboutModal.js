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
        <img 
          className="carousel-image" 
          src={data[0].image.url}
          alt={data[0].name}
        />

        <p className="carousel-stat">
          <span>Name:</span>
          <span>{data[0].name}</span>
        </p>

        <p className="carousel-stat">
          <span>Description:</span>
          <span>{data[0].description}</span>
        </p>

        <p className="carousel-stat">
          <span>Origin:</span>
          <span>{data[0].origin}</span>
        </p>

        <p className="carousel-stat">
          <span>Energy Level:</span>
          <span>{data[0].energy_level}</span>
        </p>

        <p className="carousel-stat">
          <span>Intelligence:</span>
          <span>{data[0].intelligence}</span>
        </p>

        <p className="carousel-stat">
          <span>Shed Level:</span>
          <span>{data[0].shedding_level}</span>
        </p>

        <p className="carousel-stat">
          <span>Life Span:</span>
          <span>{data[0].life_span} years</span>
        </p>

        <p className="carousel-stat">
          <span>Temperament:</span>
          <span>{data[0].temperament}</span>
        </p>
      </div>
    </div>
  );
}

export default AboutModal;