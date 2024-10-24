import React from 'react';
import PlanForm from '../components/PlanForm';
import { Typography, Layout, Row, Col, Divider } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const ConceptionPlanner = () => {

    //TODO: styling logic for rendering plan results and ability to download to profile 
    //TODO: Include how the plan is generated, suggests users to use the resource library for more information before completing form.
    //TODO: Add a disclosure message

    return (
        <Layout>
            <Content>
                <Row>
                    <Col span={24} >
                        <div>
                            <Title level={2} style={{ color: 'inherit' }}>Planning Starts Here... </Title>
                            <Text style={{ color: 'inherit' }}>
                                Let's start building your personalized conception plan! By answering a few questions,
                                we'll guide you through the best options for your family-building journey. You can hover
                                over specific terms to get more information or visit our resource library for deeper
                                insights and helpful resources. We're here to make the process as simple and supportive as possible.
                            </Text>
                        </div>
                    </Col>
                </Row>
                <Divider />
                <PlanForm />
            </Content>
        </Layout>
     
    );
};

export default ConceptionPlanner;