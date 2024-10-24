import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, Spin } from 'antd';

const { Title, Text } = Typography;

const GeneratedPlan = () => {
    const { user } = useUser();

    if (!user.plan) {
        return null;
      }

      return (
        <div className="generated-plan-container">
        <h2>Your Personalized Conception Plan</h2>
        <Card title="Overview" bordered={false} style={{ marginBottom: '20px' }}>
          <p><strong>Timeline:</strong> {user.plan.timeline}</p>
          <p><strong>Conception Method(s):</strong> {user.plan.method_choice}</p>
          <p><strong>Known Fertility Issues:</strong> {user.plan.known_fertility_issues || 'None'}</p>
          <p><strong>Donor Preference:</strong> {user.plan.donor_preference || 'Not applicable'}</p>
          <p><strong>Date Created:</strong> {new Date(user.plan.date_created).toLocaleString()}</p>
        </Card>
  
        {/* Generated Plan in Text Format */}
        <Card title="Detailed Conception Plan" bordered={false}>
          <p>{user.plan.generated_plan}</p>
        </Card>
        </div>
      );
}

export default GeneratedPlan;
