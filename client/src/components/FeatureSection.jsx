import React from 'react';



const FeatureSection = ({ title, description, link }) => {
    return (
        <div className="feature-section">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
          <button>{link}</button>
        </div>
      );
};

export default FeatureSection;