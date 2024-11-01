import React from 'react';
import PlanForm from '../components/PlanForm';
import { Typography, Layout, Row, Col, Divider, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const ConceptionPlanner = () => {
  return (
    <Layout
      style={{
        backgroundColor: '#EEE0CB',
        marginLeft: '-1vw',
        marginRight: '-1vw',
        padding: '50px 20px',
      }}
    >
      <Content style={{ height: '100%', padding: '50px 20px' }}>
        {/* Hero Section */}
        <Row gutter={[0, 40]} justify="center">
          <div
            style={{
              height: '400px',
              padding: '50px 20px',
              background: 'url(RIVF.jpg) no-repeat center/cover',
              color: '#fff',
              position: 'relative',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '-2vw',
              marginRight: '-2vw',
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
            <div style={{ position: 'relative', zIndex: 1, minWidth: '1700px', marginTop: '1vw' }}>
              <Title
                level={1}
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
                Planning Starts Here...
              </Title>
            </div>
          </div>

          {/* Introduction Section */}
          <Col span={24} style={{ maxWidth: '80%', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', padding: '30px' }}>
              <Title level={2} style={{ color: '#333', marginBottom: '20px' }}>
               
              </Title>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Text
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.75',
                    color: '#555',
                  }}
                >
                  Let's start building your personalized conception plan! By answering a few questions,
                  we’ll guide you through the best options for your family-building journey. Our AI-powered 
                  system takes your preferences and unique situation into account to generate a plan tailored
                  just for you. You can hover over specific terms to get more information or visit our resource
                  library for deeper insights and helpful resources.
                </Text>
                <Text
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.75',
                    color: '#555',
                  }}
                >
                  Please note that your data is used solely for the purpose of providing personalized support. 
                  You can learn more about how we handle your information in our 
                  <Link to="/privacy-policy" style={{ marginLeft: '5px', color: '#007000' }}>
                    Privacy Policy
                  </Link>. We're here to make the process as simple and supportive as possible—every step of the way.
                </Text>
              </Space>
            </div>
          </Col>

          <Divider />

          {/* Plan Form Section */}
          <Col span={24} style={{ maxWidth: '80%', margin: '0 auto' }}>
            <div>
              <PlanForm />
            </div>
          </Col>
        </Row>
      </Content>

      {/* Footer Section */}
      <Footer
        style={{
          textAlign: 'center',
          padding: '20px 50px'
        }}
      >
        BHBH Design ©{new Date().getFullYear()} Created by MJBH
      </Footer>
    </Layout>
  );
};

export default ConceptionPlanner;
