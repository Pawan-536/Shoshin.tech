import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt="icon" className="card-image" />}
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
