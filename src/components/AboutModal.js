import React, { useState } from "react";
import "./AboutModal.css";
import { Icon } from '@iconify/react';

function AboutModal({ data }) {
  const [current, setCurrent] = useState(data[0]);
  const [index, setIndex] = useState(0);

  const closeModal = () => {
    document.body.classList.toggle("modal-open");
  }

  function previousCat(e) {
    e.preventDefault();

    if (current === data[0]) {
      setIndex(data.length - 1);
      setCurrent(data[index]);
      console.log(index);
    } else {
      setIndex(prevIndex => prevIndex - 1);
      setCurrent(data[index]);
      console.log(index);
    }
  }

  function nextCat(e) {
    e.preventDefault();
    
    if (current === data[data.length - 1]) {
      setIndex(data[0]);
      setCurrent(data[index]);
      console.log(index);
    } else {
      setIndex(prevIndex => prevIndex + 1);
      setCurrent(data[index]);
      console.log(index);
    }
  }


  return (
    <div className="about-modal">
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
            src={current.image.url}
            alt={current.name}
          />
        </div>

        <p className="carousel-stat name">
          <span>Name:</span>
          <span>{current.name}</span>
        </p>

        <p className="carousel-stat description">
          <span>Description:</span>
          <span>{current.description}</span>
        </p>

        <p className="carousel-stat temperament">
          <span>Temperament:</span>
          <span>{current.temperament}</span>
        </p>

        <p className="carousel-stat origin">
          <span>Origin:</span>
          <span>{current.origin}</span>
        </p>

        <p className="carousel-stat energy-level">
          <span>Energy Level:</span>
          <span>{current.energy_level}</span>
        </p>

        <p className="carousel-stat intelligence">
          <span>Intelligence:</span>
          <span>{current.intelligence}</span>
        </p>

        <p className="carousel-stat shed-level">
          <span>Shed Level:</span>
          <span>{current.shedding_level}</span>
        </p>

        <p className="carousel-stat life-span">
          <span>Life Span:</span>
          <span>{current.life_span} years</span>
        </p>
      </div>

      <button 
        className="carousel-btn-left"
        onClick={previousCat}
      >
        <Icon icon="charm:chevron-left" />
      </button>
      <button 
        className="carousel-btn-right"
        onClick={nextCat}
      >
        <Icon icon="charm:chevron-right" />
      </button>
    </div>
  );
}

export default AboutModal;