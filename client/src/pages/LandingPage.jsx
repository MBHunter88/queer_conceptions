import React from 'react';
import FeatureSection from '../components/FeatureSection';
import { Link } from 'react-router-dom';
import { Layout, Typography, Row, Col, Divider, Space } from 'antd';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const LandingPage = () => {
  return (
    <Layout style={{ backgroundColor: '#EEE0CB', padding: '50px 0px' }}>
      <Content style={{ padding: '0 20px' }}>
        {/* Hero Section */}
        <Row gutter={[0, 40]} justify="center">
          <div
            style={{
              height: 'auto',
              padding: '50px 20px',
              background: 'url(pregnancy.jpg) no-repeat center/cover',
              color: '#fff',
              position: 'relative',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              width: '100vw',
              margin: '0 -20px',
              transition: 'transform 0.3s ease',
              filter: 'contrast(100%)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
              }}
            ></div>
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '70%',
                textAlign: 'justify',
                animation: 'fadeIn 1s ease-in',
              }}
            >
              <Title
                level={1}
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#f0f0f0',
                  fontSize: '3rem',
                }}
              >
                Welcome to Queer Conceptions
              </Title>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Text
                  style={{
                    fontSize: '1.5rem',
                    lineHeight: '1.7',
                    fontWeight: '500',
                    color: '#f0f0f0',
                    textAlign: 'justify',
                    marginBottom: '20px',
                  }}
                >
                  Queer Conceptions was created to address the unique challenges faced by LGBTQ+ individuals and families
                  as they navigate the journey of family building. We recognize that traditional resources often overlook
                  the needs of LGBTQ+ communities, leaving many without the guidance and support they deserve.
                </Text>
                <Text
                  style={{
                    fontSize: '1.5rem',
                    lineHeight: '1.7',
                    fontWeight: '500',
                    color: '#f0f0f0',
                    textAlign: 'justify',
                  }}
                >
                  Our mission is to bridge that gap by offering a compassionate, inclusive space that provides clear,
                  comprehensive, and accessible information about conception options, legal considerations, medical
                  processes, and emotional support.
                </Text>
              </Space>
            </div>
          </div>

          <Divider />

          {/* Feature Sections */}
          <Row gutter={[0, 40]} justify="center" style={{ paddingBottom: '30px' }}>
            <Col span={24} style={{ maxWidth: '80%', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <FeatureSection
                title="Conception Planner"
                description="Start your journey with a personalized conception plan crafted specifically for you. 
                By answering a few simple questions, we’ll create a detailed roadmap to help you navigate the unique 
                and sometimes complex journey to parenthood. Our plan will provide actionable steps, tailored resources, 
                and guidance that adapts to your needs."
                link={<Link to="/planner">Start Here</Link>}
              />
              <Divider />
            </Col>
            <Col span={24} style={{ maxWidth: '80%', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <FeatureSection
                title="Resource Library"
                description="Access a wealth of inclusive resources curated specifically for LGBTQ+ families.
                From informative articles and guides to helpful links, our resource library has everything you
                need to feel empowered and informed throughout your family-building journey."
                link={<Link to="/resources" >Explore</Link>}
              />
              <Divider />
            </Col>
            <Col span={24} style={{ maxWidth: '80%', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <FeatureSection
                title="Virtual Doula"
                description="Introducing our Virtual Doula Chatbot – your personal guide to navigating the 
                complexities of LGBTQ+ family planning. Whether you need support with understanding different 
                conception methods, legal guidance, or simply want a friendly chat, our Virtual Doula is here 
                to provide personalized, compassionate assistance."
                link={<Link to="/chatbot">Chat Now</Link>}
              />
            </Col>
          </Row>
        </Row>
      </Content>
      
      <Footer style={{ textAlign: 'center', padding: '20px 50px', backgroundColor: '#EEE0CB' }}>
        BHBH Design ©{new Date().getFullYear()} Created by MJBH
      </Footer>
    </Layout>
  );
};

export default LandingPage;
