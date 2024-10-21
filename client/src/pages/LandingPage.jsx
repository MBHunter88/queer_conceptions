import React from 'react';
import NavBar from '../components/NavBar';
import FeatureSection from '../components/FeatureSection';
import { Link } from 'react-router-dom';
import { Layout, Typography, Skeleton, Row, Col } from 'antd';

const { Content, Footer } = Layout;
const { Title } = Typography;

//TODO: Replace skeleton w/ actual content

const LandingPage = () => {
  return (
    <Layout>
      <NavBar />
      <Content style={{  height: '100%', padding: '50px 20px' }}>
        <div className="landing-page">
            <Skeleton.Image/>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Welcome to Queer Conceptions
          </Title>
          <Title level={3}>
            <Skeleton/>
          </Title>
            {/* feature sections in vertical layout */}
          <Row gutter={[0, 40]} justify="center">
            <Col span={24}>
              <FeatureSection
                title="Conception Planner"
                description="Start here to get a personalized plan for your family today."
                link={<Link to="/planner">Start Here</Link>}
              />
              <Skeleton/>
            </Col>
            <Col span={24}>
              <FeatureSection
                title="Resource Library"
                description="Resources tailored to help LGBTQ+ families navigate family planning."
                link={<Link to="/resources">Explore</Link>}
              />
              <Skeleton/>
            </Col>
            <Col span={24}>
              <FeatureSection
                title="Virtual Doula"
                description="Coming Soon."
              />
              <Skeleton/>
            </Col>
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
