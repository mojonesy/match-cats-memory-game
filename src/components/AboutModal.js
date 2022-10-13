import React, { useEffect, useState } from "react";
import "./AboutModal.css";
import { Icon } from '@iconify/react';

function AboutModal() {
  const axios = require('axios').default;
  const VALIDCATS = [
    'abys', 'birm', 'ctif', 'char', 'drex', 'mcoo', 'manx', 'raga', 'rblu'
  ];

  const [cats, setCats] = useState([]);

  useEffect(() => {
    setCats("Loading...");
    const url = 'https://api.thecatapi.com/v1/breeds';
    axios.get(url)
      .then(res => {
        const data = res.data.filter(cat => VALIDCATS.includes(cat.id));
        setCats({...data});
      })
      .catch(err => console.error(err))
      .finally(() => console.log(cats));
  }, []);

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
        <p>{cats[0].name}</p>
      </div>
    </div>
  );
}

export default AboutModal;