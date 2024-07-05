// src/components/PropertyList.js
import React from 'react';
import Property from './Property';
import './PropertyList.css';

const PropertyList = ({ properties }) => (
  <div className="property-list">
    {properties.map(property => (
      <Property key={property.id} {...property} />
    ))}
  </div>
);

export default PropertyList;
