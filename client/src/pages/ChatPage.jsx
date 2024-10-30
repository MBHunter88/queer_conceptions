import React, { useState } from 'react';
import { Card, Typography, Form, Input, Layout, Row, Col } from 'antd';
import Chatbot from '../components/Chatbot';

const { Content } = Layout;
const { Title, Text } = Typography;

const ChatPage = () => {


    return (
        <Layout>
            <Content style={{ height: '100%', padding: '50px 20px' }}>
                <Row gutter={[0, 40]} justify="center">
                    <Title level={2}>Virtual Doula</Title>
                    <Text>
                    Welcome to the Virtual Doula Chatbot! This chatbot is designed to 
                    support you by answering your questions related to family planning, 
                    conception methods, legal considerations, and more. Simply type your 
                    question in the input box below, and our Virtual Doula will respond 
                    with informative and helpful guidance. Remember, all information 
                    provided is for educational purposes and does not replace professional
                    medical or legal advice. Let's get started – ask anything you'd like to know!
                    </Text>
                    <Col span={24}>
                    <Chatbot />
                    </Col>
                </Row>

            </Content>
          
        </Layout>
       
        
       
    )
}

export default ChatPage