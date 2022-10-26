import React, { useState } from "react";
import "./AboutModal.css";
import { Icon } from '@iconify/react';

function AboutModal({ loading, data, error }) {
  const [index, setIndex] = useState(0);

  const closeModal = () => {
    document.body.classList.toggle("modal-open");
  }

  const next = () => index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
  const prev = () => index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
  console.log(index);

  return (
    <div className="about-modal">
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}

        <button 
            className="close-modal-btn" 
            aria-label="toggle about cats modal"
            onClick={closeModal}
            >
          <Icon icon="lucide:x-square" inline={true} />
        </button>
        <h2 className="modal-title">
          <span className="modal-title-text">About the Cats</span>
          <Icon icon="fluent-emoji-flat:kissing-cat" className="cat-icon"/>
        </h2>

      <div className="carousel">
        <div className="carousel-image-container">
          <img
            src={data[index].image.url}
            alt={data[index].name}
          />
        </div>

        <p className="carousel-stat name">
          <span>Name:</span>
          <span>{data[index].name}</span>
        </p>

        <p className="carousel-stat description">
          <span>Description:</span>
          <span>{data[index].description}</span>
        </p>

        <p className="carousel-stat temperament">
          <span>Temperament:</span>
          <span>{data[index].temperament}</span>
        </p>

        <p className="carousel-stat origin">
          <span>Origin:</span>
          <span>{data[index].origin}</span>
        </p>

        <p className="carousel-stat energy-level">
          <span>Energy Level:</span>
          <span>{data[index].energy_level}</span>
        </p>

        <p className="carousel-stat intelligence">
          <span>Intelligence:</span>
          <span>{data[index].intelligence}</span>
        </p>

        <p className="carousel-stat shed-level">
          <span>Shed Level:</span>
          <span>{data[index].shedding_level}</span>
        </p>

        <p className="carousel-stat life-span">
          <span>Life Span:</span>
          <span>{data[index].life_span} years</span>
        </p>
      </div>

      <span 
        className="carousel-btn-left"
        onClick={() => prev()}
      >
        <Icon icon="charm:chevron-left" />
      </span>
      <span 
        className="carousel-btn-right"
        onClick={() => next()}
      >
        <Icon icon="charm:chevron-right" />
      </span>
    </div>
  );
}

export default AboutModal;