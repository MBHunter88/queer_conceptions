import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const FeatureSection = ({ title, description, link }) => {



    return (
        <div className="feature-section" >
          <Title level={2}>{title}</Title>
          <Text>{description}</Text>
          <div style={{ marginTop: '20px' }}>
        {link}
      </div>
        </div>
      );
};

export default FeatureSection;