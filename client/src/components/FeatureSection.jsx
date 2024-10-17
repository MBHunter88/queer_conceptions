import React from 'react';



const FeatureSection = ({ title, description, link }) => {

//TODO: Decide to keep button or wrap section in link to render feature

    return (
        <div className="feature-section">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
          <button>{link}</button>
        </div>
      );
};

export default FeatureSection;