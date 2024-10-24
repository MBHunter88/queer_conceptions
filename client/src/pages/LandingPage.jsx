import React from 'react';
import FeatureSection from '../components/FeatureSection';
import { Link } from 'react-router-dom';
import { Layout, Typography, Row, Col, Divider } from 'antd';

const { Content, Footer } = Layout;
const { Title } = Typography;

//TODO: Styling

const LandingPage = () => {
  return (
    <Layout>
      <Content style={{  height: '100%', padding: '50px 20px' }}>
        <div className="landing-page">
          <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Welcome to Queer Conceptions
          </Title>
          <Title level={3}>
          We provide personalized resources and guidance specifically designed for LGBTQ+ individuals
           and families as they explore family-building options. Whether you're just beginning to think
            about conception or seeking resources and support along the way, Queer Conceptions is here to
             help every step of the way.
          </Title>
          <Divider/>
            {/* feature sections in vertical layout */}
          <Row gutter={[0, 40]} justify="center">
            <Col span={24}>
              <FeatureSection
                title="Conception Planner"
                description="Get started on your journey with a personalized conception plan tailored
                 just for you. By answering a few simple questions, we'll provide you with a comprehensive
                  roadmap to help you navigate the complex and unique challenges of conception. Let us make
                   your journey clearer, step-by-step."
                link={<Link to="/planner">Start Here</Link>}
              />
              <Divider/>
            </Col>
            <Col span={24}>
              <FeatureSection
                title="Resource Library"
                description="Access a wealth of inclusive resources curated specifically for LGBTQ+ families.
                 From informative articles and guides to helpful links, our resource library has everything you
                  need to feel empowered and informed throughout your family-building journey."
                link={<Link to="/resources">Explore</Link>}
              />
            </Col>
            <Divider/>
            <Col span={24}>
              <FeatureSection
                title="Virtual Doula"
                description='Coming Soon'
              />
            </Col>
            <Divider/>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      BHBH Design ©{new Date().getFullYear()} Created by MJBH
      </Footer>
    </Layout>
  );
};

export default LandingPage;
