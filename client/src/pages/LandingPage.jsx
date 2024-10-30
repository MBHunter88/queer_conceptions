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
      <Content style={{ height: '100%', padding: '50px 20px' }}>
        <div className="landing-page">
          <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Welcome to Queer Conceptions
          </Title>
          <Title level={4}>
            Queer Conceptions was created to address the unique challenges faced by LGBTQ+ individuals and families
            as they navigate the journey of family building. We recognize that traditional resources often overlook
            the needs of LGBTQ+ communities, leaving many without the guidance and support they deserve. Our mission
            is to bridge that gap by offering a compassionate, inclusive space that provides clear, comprehensive,
            and accessible information about conception options, legal considerations, medical processes, and emotional support.

            We understand that the journey to parenthood is deeply personal and often complex. Whether you're pursuing
            IVF, surrogacy, donor conception, or exploring other paths, Queer Conceptions is here to provide the personalized
            resources and step-by-step guidance you need. By bringing together curated information and tailored support,
            we aim to empower LGBTQ+ individuals and families to make informed decisions and navigate
            the family-building process with confidence.
          </Title>
          <Divider />
          {/* feature sections in vertical layout */}
          <Row gutter={[0, 40]} justify="center">
            <Col span={24}>
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
            <Col span={24}>
              <FeatureSection
                title="Resource Library"
                description="Access a wealth of inclusive resources curated specifically for LGBTQ+ families.
                 From informative articles and guides to helpful links, our resource library has everything you
                  need to feel empowered and informed throughout your family-building journey."
                link={<Link to="/resources">Explore</Link>}
              />
            </Col>
            <Divider />
            <Col span={24}>
              <FeatureSection
                title="Virtual Doula"
                description='Coming Soon'
                link={<Link to="/chatbot">Chat Now</Link>}
              />
            </Col>
            <Divider />
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
