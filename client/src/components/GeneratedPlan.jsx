import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Typography, Card, Empty, Checkbox } from 'antd';

const { Title, Text, Paragraph } = Typography;

const GeneratedPlan = () => {
    const { user } = useUser();

    if (!user || !user.plan || !user.plan.generated_plan) {
        return <Empty description="No plan available. Please generate your conception plan to view it here." />;
    }

    // Destructure the plan data
    const { title, timeline, steps } = user.plan.generated_plan;

    // State to keep track of checked items
    const [checkedSteps, setCheckedSteps] = useState({});

    const handleCheckboxChange = (stepIndex, subStepIndex) => {
        setCheckedSteps(prevState => ({
            ...prevState,
            [stepIndex]: {
                ...prevState[stepIndex],
                [subStepIndex]: !prevState[stepIndex]?.[subStepIndex],
            },
        }));
    };

    return (
        <div className="generated-plan-container" style={{ padding: '20px' }}>
            <Title level={2}>{title}</Title>

            {/* Overview Section */}
            <Card title="Timeline" bordered={false} style={{ marginBottom: '20px' }}>
                <Paragraph>
                    <Text strong>{timeline}</Text> 
                </Paragraph>
            </Card>

            {/* Steps Section */}
            {steps && steps.length > 0 && (
                <Card title="Detailed Conception Plan Checklist" bordered={false}>
                    {steps.map((step, stepIndex) => (
                        <div key={stepIndex} style={{ marginBottom: '20px' }}>
                            <Title level={4}>Step {stepIndex + 1}: {step.title}</Title>
                            <Text type="secondary">{step.timeframe}</Text>
                            <div style={{ marginTop: '10px'}}>
                                {step.sub_steps.map((subStep, subStepIndex) => (
                                    <Checkbox
                                        key={subStepIndex}
                                        checked={checkedSteps[stepIndex]?.[subStepIndex] || false}
                                        onChange={() => handleCheckboxChange(stepIndex, subStepIndex)}
                                        style={{ display: 'flex', margin: '5px 0', justifyContent: 'center' }}
                                    >
                                        <Paragraph style={{ margin: 0 }}>{subStep}</Paragraph>
                                    </Checkbox>
                                ))}
                            </div>
                        </div>
                    ))}
                </Card>
            )}
        </div>
    );
};

export default GeneratedPlan;
