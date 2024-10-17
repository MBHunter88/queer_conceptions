import React from 'react';
import { Link } from 'react-router-dom';


const FeatureSection = ({ title, description }) => {
    return (
        <div className="feature-section">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
        </div>
      );
};

export default FeatureSection;