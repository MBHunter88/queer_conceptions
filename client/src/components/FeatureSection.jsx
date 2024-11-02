import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const FeatureSection = ({ title, description, link }) => {
  const titleId = `${title.replace(/\s+/g, '-').toLowerCase()}-title`;
  const descriptionId = `${title.replace(/\s+/g, '-').toLowerCase()}-description`;



    return (
        <div className="feature-section" 
        style={{
          marginBottom: '40px',
          maxWidth: '100%',
          margin: '0 auto',
        }}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        >
          <Title 
          id={titleId}
          level={2}
          style={{
            fontWeight: 'bold',
            
            marginBottom: '20px',
          }}
          >{title}</Title>
          <Text
          id={descriptionId}
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.75',           
            display: 'block',
            marginBottom: '20px',
          }}
          >{description}</Text>
          <div style={{ marginTop: '20px' }}>
          <Button
          type="primary"
          style={{
            backgroundColor: '#007000',
            borderColor: '#007000',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1rem'
          }}
        >
          {link}
        </Button>
      </div>
        </div>
      );
};

export default FeatureSection;