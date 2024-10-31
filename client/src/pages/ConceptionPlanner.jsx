import React from 'react';
import PlanForm from '../components/PlanForm';
import { Typography, Layout, Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const ConceptionPlanner = () => {

    //TODO: styling logic for rendering plan results and ability to download to profile 

   

    return (
        <Layout>
            <Content>
                <Row>
                    <Col span={24} >
                        <div>
                            <Title level={2} style={{ color: 'inherit' }}>Planning Starts Here... </Title>
                            <Text style={{ color: 'inherit' }}>
                            Let's start building your personalized conception plan! By answering a few questions,
                            we’ll guide you through the best options for your family-building journey. Our AI-powered 
                            system takes your preferences and unique situation into account to generate a plan tailored
                            just for you. You can hover over specific terms to get more information or visit our resource
                            library for deeper insights and helpful resources.

                            Please note that your data is used solely for the purpose of providing personalized support. 
                            You can learn more about how we handle your information in our  
                            <Link to="/privacy-policy" style={{ marginLeft: '5px', color: '#1890ff' }}>Privacy Policy</Link>. 
                            We're here to make the process as simple and supportive as possible—every step of the way.
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