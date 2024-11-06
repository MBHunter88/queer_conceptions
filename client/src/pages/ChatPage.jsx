import React, { useState } from 'react';
import { Typography, Button, Layout, Row, Col, Modal, Divider } from 'antd';
import Chatbot from '../components/ChatBot';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const ChatPage = () => {
    const { user } = useUser();
    const [showChat, setShowChat] = useState(false);
    const navigate = useNavigate();

    // User must be logged in to use chat feature
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
        <Layout style={{ backgroundColor: '#EEE0CB', padding: '50px 0' }}>
            <Content style={{ padding: '0 20px' }}>
                {/* Hero Section */}
                <Row gutter={[0, 40]} justify="center">
                    <div
                        style={{
                            height: 'auto',
                            padding: '50px 20px',
                            background: 'url(chat.png) no-repeat center/cover',
                            color: '#fff',
                            position: 'relative',
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100vw',
                            margin: '0 -20px',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                            }}
                        ></div>
                        <div
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                maxWidth: '70%',
                                textAlign: 'justify',
                            }}
                        >
                            <Title
                                level={1}
                                style={{
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }}
                            >
                                Virtual Doula
                            </Title>
                            <Text
                                style={{
                                    fontSize: '1.75rem',
                                    lineHeight: '1.5',
                                    fontWeight: '500',
                                    color: 'white',
                                    textAlign: 'justify',
                                }}
                            >
                                Welcome to the Virtual Doula Chatbot! This chatbot is designed to support you by
                                answering your questions related to family planning, conception methods, legal
                                considerations, and more. Simply type your question in the input box below, and our
                                Virtual Doula will respond with informative and helpful guidance. Remember, all
                                information provided is for educational purposes and does not replace professional
                                medical or legal advice. Let's get started – ask anything you'd like to know!
                            </Text>
                        </div>
                    </div>

                    <Divider />

                    {/* Chatbot Section */}
                    <Col span={24} style={{ textAlign: 'center', marginBottom: '80px' }}>
                        {user ? (
                            <Chatbot />
                        ) : (
                            <Button
                                type="primary"
                                onClick={handleShowChat}
                                style={{
                                    padding: '10px 20px',
                                    fontSize: '1.2rem',
                                    backgroundColor: '#007000',
                                    borderColor: '#007000',
                                }}
                            >
                                Chat Now
                            </Button>
                        )}
                    </Col>
                </Row>
            </Content>
            <Footer
       style={{ textAlign: 'center', padding: '20px 50px', backgroundColor: '#EEE0CB', marginBottom: '80px' }}
      >
        BHBH Design ©{new Date().getFullYear()} Created by MJBH
      </Footer>
        </Layout>
    );
};

export default ChatPage;

