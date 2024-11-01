import React, { useState } from 'react';
import { Card, Typography, Button, Layout, Row, Col, Modal } from 'antd';
import Chatbot from '../components/Chatbot';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

const { Content } = Layout;
const { Title, Text } = Typography;

const ChatPage = () => {
    const { user, setUser } = useUser();
    const [showChat, setShowChat] = useState(false)
    const navigate = useNavigate();

     //user must be logged in to use chat feature
     const handleShowChat = () => {
        if (!user) {
          // Show warning modal if the user is not logged in
          Modal.warning({
            title: 'Login Required',
            content: 'Please sign up or login to use this feature.',
            onOk: () => {
              navigate('/');
            },
          });
        } else {
          setShowChat(true);
        }
      };

    return (
        <Layout>
            <Content style={{ padding: '30px', maxWidth: '100%', margin: '0 auto', backgroundColor: '#EEE0CB',borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                
            <Row gutter={[0, 40]} justify="center">
                    <Title level={2} style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Virtual Doula</Title>
                    <Text style={{ fontSize: '1.2rem', lineHeight: '1.75', textAlign: 'center', maxWidth: '100%', marginBottom: '20px' }}>
                    Welcome to the Virtual Doula Chatbot! This chatbot is designed to 
                    support you by answering your questions related to family planning, 
                    conception methods, legal considerations, and more. Simply type your 
                    question in the input box below, and our Virtual Doula will respond 
                    with informative and helpful guidance. Remember, all information 
                    provided is for educational purposes and does not replace professional
                    medical or legal advice. Let's get started – ask anything you'd like to know!
                    </Text>
                    <Col span={24} style={{ textAlign: 'center' }}>
                   {user ? (
                     <Chatbot />
                   ) : (
                     <Button type="primary" onClick={handleShowChat} style={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor: '#007000', borderColor: '#007000' }}>
                       Chat Now
                     </Button>
                   )}
                    </Col>
                </Row>

            </Content>
          
        </Layout>
       
        
       
    )
}

export default ChatPage