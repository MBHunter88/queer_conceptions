import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, Spin } from 'antd';

const { Title, Text, Paragraph } = Typography;

const GeneratedPlan = () => {
    const { user } = useUser();

    if (!user.plan) {
        return null;
      }
console.log(user.plan.generated_plan)
      


    //   //destructure the plan data
      const { title, timeline, steps } = user.plan.generated_plan
   

      return (
        <div className="generated-plan-container" style={{ padding: '20px' }}>
            <Title level={2}>{title}</Title>

            {/* Overview Section */}
            <Card title="Overview" bordered={false} style={{ marginBottom: '20px' }}>
                <Paragraph>
                    <Text strong>Timeline:</Text> {timeline}
                </Paragraph>
            </Card>

            {/* Steps Section */}
            {steps && steps.length > 0 && (
                <Card title="Detailed Conception Plan" bordered={false}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <Title level={4}>Step {index + 1}: {step.title}</Title>
                            <Text type="secondary">{step.timeframe}</Text>
                            <ul>
                                {step.sub_steps.map((subStep, subIndex) => (
                                    <li key={subIndex}>
                                        <Paragraph>{subStep}</Paragraph>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Card>
            )}
        </div>
      );
}

export default GeneratedPlan;
