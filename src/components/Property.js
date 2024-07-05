// src/components/Property.js
import React from 'react';
import './Property.css';

const Property = ({ image, title, description, price }) => (
  <div className="property">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="price">{price}</p>
  </div>
);

export default Property;
