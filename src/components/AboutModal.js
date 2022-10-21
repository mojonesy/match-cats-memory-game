import React, { useState } from "react";
import "./AboutModal.css";
import { Icon } from '@iconify/react';

function AboutModal({ data }) {

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
        <h2 className="modal-title">
          <span className="modal-title-text">About the Cats</span>
          <Icon icon="fluent-emoji-flat:kissing-cat" className="cat-icon"/>
        </h2>

      <div className="carousel">
        <div className="carousel-image-container">
          <img
            src={data[0].image.url}
            alt={data[0].name}
          />
        </div>

        <p className="carousel-stat name">
          <span>Name:</span>
          <span>{data[0].name}</span>
        </p>

        <p className="carousel-stat description">
          <span>Description:</span>
          <span>{data[0].description}</span>
        </p>

        <p className="carousel-stat origin">
          <span>Origin:</span>
          <span>{data[0].origin}</span>
        </p>

        <p className="carousel-stat energy-level">
          <span>Energy Level:</span>
          <span>{data[0].energy_level}</span>
        </p>

        <p className="carousel-stat intelligence">
          <span>Intelligence:</span>
          <span>{data[0].intelligence}</span>
        </p>

        <p className="carousel-stat shed-level">
          <span>Shed Level:</span>
          <span>{data[0].shedding_level}</span>
        </p>

        <p className="carousel-stat life-span">
          <span>Life Span:</span>
          <span>{data[0].life_span} years</span>
        </p>

        <p className="carousel-stat temperament">
          <span>Temperament:</span>
          <span>{data[0].temperament}</span>
        </p>
      </div>
    </div>
  );
}

export default AboutModal;