import React from 'react';
import PlanForm from '../components/PlanForm';
import { Typography, Layout, Row, Col, Divider, Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const ConceptionPlanner = () => {

  const { user, setUser } = useUser();

  const handleShowPlan = () => {
    if (!user) {
      // Show warning modal if the user is not logged in
      Modal.warning({
        title: 'Login Required',
        content: 'Please sign up or login to use this feature.',
        onOk: () => {},
      });
    } else {
      setShowChat(true);
    }
  };

  return (
    <Layout
      style={{
        backgroundColor: '#EEE0CB',
        padding: '50px 0',
      }}
    >
      <Content style={{ padding: '0 20px' }}>
        {/* Hero Section */}
        <Row gutter={[0, 40]} justify="center">
          <div
            style={{
              height: 'auto',
              padding: '50px 20px',
              background: 'url(RIVF.jpg) no-repeat center/cover',
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
                Planning Starts Here...
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
                  Let's start building your personalized conception plan! By answering a few questions,
                  we’ll guide you through the best options for your family-building journey. Our AI-powered 
                  system takes your preferences and unique situation into account to generate a plan tailored
                  just for you. You can hover over specific terms to get more information or visit our resource
                  library for deeper insights and helpful resources.
                </Text>
            
            </div>
          </div>

          <div>
            <Text
              style={{
                fontSize: '1rem',
                lineHeight: '1.5',
                fontWeight: '500',
                color: 'black',
                textAlign: 'justify',
                fontStyle: 'italic',
              }}
            >
              Please note that your data is used solely for the purpose of providing personalized support. 
              You can learn more about how we handle your information in our
              <Link to="/privacy-policy" style={{ marginLeft: '5px', color: '#007000' }}>
                Privacy Policy
              </Link>.
            </Text>
          </div>

          <Divider />

          {/* Plan Form Section */}
          <Col span={24}>
            <Row justify="center" style={{ paddingBottom: '30px' }}>
            {user ? (
                     <PlanForm />
                   ) : (
                     <Button onClick={handleShowPlan} type="primary" style={{ padding: '30px 20px', fontSize: '1.2rem', backgroundColor: '#007000', borderColor: '#007000' }}>
                       Start Now
                     </Button>
                   )}
            </Row>
          </Col>
        </Row>
      </Content>

      {/* Footer Section */}
      <Footer
       style={{ textAlign: 'center', padding: '20px 50px', backgroundColor: '#EEE0CB', marginBottom: '80px' }}
      >
        BHBH Design ©{new Date().getFullYear()} Created by MJBH
      </Footer>
    </Layout>
  );
};

export default ConceptionPlanner;

