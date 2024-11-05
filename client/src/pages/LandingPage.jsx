import React from 'react';
import FeatureSection from '../components/FeatureSection';
import { Link } from 'react-router-dom';
import { Layout, Typography, Row, Col, Divider, Space } from 'antd';


const { Content, Footer } = Layout;
const { Title, Text } = Typography;


const LandingPage = () => {
  return (
    <Layout style={{backgroundColor: '#EEE0CB',  marginTop: '-6.5vw', marginLeft: '-1vw', marginRight: '-1vw', padding: '50px 20px'}}>
      <Content
        style={{
          height: '100%',
          padding: '50px 20px',
        }}>
        <div className="landing-page">
       
        <div style={{
              height: 'auto',
              padding: '50px 20px',
              background: 'url(pregnancy.jpg) no-repeat center/cover',
              color: '#fff',
              position: 'relative',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              marginLeft: '-2vw',
              marginRight: '-2vw'
            }}>
         <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                }}></div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: "90%", marginTop: '1vw', padding: "10px" }}>
          <Title level={1}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Welcome to Queer Conceptions
          </Title>
          <Space direction='vertical'>      
            <Text  style={{  fontSize: '1.2rem',
        lineHeight: '1.5',
        fontWeight: '500',
        color: 'white',
        wordWrap: 'break-word', }}>
              Queer Conceptions was created to address the unique challenges faced by LGBTQ+ individuals and families
              as they navigate the journey of family building. We recognize that traditional resources often overlook
              the needs of LGBTQ+ communities, leaving many without the guidance and support they deserve. Our mission
              is to bridge that gap by offering a compassionate, inclusive space that provides clear, comprehensive,
              and accessible information about conception options, legal considerations, medical processes, and emotional support.
            </Text>
            <Text  style={{  fontSize: '1.2rem',
        lineHeight: '1.5',
        fontWeight: '500',
        color: 'white',
        wordWrap: 'break-word',}}>
              We understand that the journey to parenthood is deeply personal and often complex. Whether you're pursuing
              IVF, surrogacy, donor conception, or exploring other paths, Queer Conceptions is here to provide the personalized
              resources and step-by-step guidance you need. By bringing together curated information and tailored support,
              we aim to empower LGBTQ+ individuals and families to make informed decisions and navigate
              the family-building process with confidence.
            </Text> 
          </Space>
          </div>   
          </div>
          <Divider  />
          {/* feature sections in vertical layout */}
          <Row gutter={[0, 40]} justify="center">
            <Col span={24}
            style={{ 
              maxWidth: '80%'
            }}>
              <FeatureSection 
                title="Conception Planner"
                description="Start your journey with a personalized conception plan crafted specifically for you. 
                By answering a few simple questions, we’ll create a detailed roadmap to help you navigate the unique 
                and sometimes complex journey to parenthood. Our plan will provide actionable steps, tailored resources, 
                and guidance that adapts to your needs. Let Queer Conceptions make your journey clearer and more manageable, 
                one step at a time."
                link={<Link to="/planner">Start Here</Link>}
              />
              <Divider />
            </Col>
            <Col span={24}
             style={{ 
              maxWidth: '80%'
            }}>
              <FeatureSection
                title="Resource Library"
                description="Access a wealth of inclusive resources curated specifically for LGBTQ+ families.
                 From informative articles and guides to helpful links, our resource library has everything you
                  need to feel empowered and informed throughout your family-building journey."
                link={<Link to="/resources">Explore</Link>}
              />
            </Col>
            <Divider />
            <Col span={24}
            style={{ 
              maxWidth: '80%'
            }}>
              <FeatureSection
                title="Virtual Doula"
                description='Introducing our Virtual Doula Chatbot – your personal guide to navigating the 
                complexities of LGBTQ+ family planning. Whether you need support with understanding different 
                conception methods, legal guidance, or simply want a friendly chat, our Virtual Doula is here 
                to provide personalized, compassionate assistance. Start chatting today to get answers tailored 
                to your unique journey.'
                link={<Link to="/chatbot">Chat Now</Link>}
              />
            </Col>
            <Divider />
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', padding: '20px 50px', }}>
        BHBH Design ©{new Date().getFullYear()} Created by MJBH
      </Footer>
    </Layout>
  );
};

export default LandingPage;

