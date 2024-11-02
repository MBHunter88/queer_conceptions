import React, { useState } from 'react';
import { Card, Typography, Form, Input, Layout, Row, Col } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const resources = [
  {
    title: "Family Equality",
    description: "Family Equality provides various resources for LGBTQ+ families, including information on conception, adoption, and parenting. They also offer webinars and guides for navigating family-building as an LGBTQ+ individual or couple.",
    link: "https://www.familyequality.org"
  },
  {
    title: "Resolve: The National Infertility Association",
    description: " Resolve offers information specifically for LGBTQ+ individuals, covering topics such as IVF, surrogacy, and other pathways to conception, while focusing on inclusivity.",
    link: "https://resolve.org/what-are-my-options/lgbtq-family-building"
  },
  {
    title: "Queering Reproductive Justice: A Mini Toolkit",
    description: "This toolkit is intended specifically for reproductive health, rights, and justice advocates who want to gain and further their understanding of repro* issues within an LGBTQ context.",
    link: "https://www.thetaskforce.org/resources/queering-reproductive-justice-a-mini-toolkit/"
  },
  {
    title: "Pride Angel",
    description: " Pride Angel is an online platform connecting LGBTQ+ people with donors and co-parents. It provides resources and information to help navigate the journey to parenthood.",
    link: "https://www.prideangel.com"
  },
  {
    title: "Our Family Coalition",
    description: "Our Family Coalition provides family-building resources, including support groups, educational programs, and networking opportunities for LGBTQ+ individuals and couples.",
    link: "https://ourfamily.org"
  },
  {
    title: "The Center for Reproductive Rights",
    description: "This organization provides resources to understand reproductive rights for LGBTQ+ individuals, including information on fertility treatments, surrogacy, and healthcare rights.",
    link: "https://reproductiverights.org"
  },
]

const ResourceLibrary = () => {

  const [searchTerm, setSearchTerm] = useState('');


  // Logic fo search bar functionality
  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <Layout style={{backgroundColor: '#EEE0CB',  marginLeft: '-1vw', marginRight: '-1vw', padding: '50px 20px'}}>
      <Content style={{ height: '100%', padding: '50px 20px' }}>
        <div className="resource-library">

          {/* Top Div with Background */}
          <Row gutter={[0, 40]} justify="center">
            <div style={{
              height: '450px',
              padding: '50px 20px',
              background: 'url(RL_Hero.jpg) no-repeat center/cover',
              color: '#fff',
              position: 'relative',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '-2vw',
              marginRight: '-2vw'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)'
              }}></div>
              <div style={{ position: 'relative', zIndex: 1, maxWidth: "70%", marginTop: '1vw' }}>
                <Text style={{ fontSize: '1.75vw', lineHeight: '1.5', fontWeight: '500', color: 'white' }}>
                  Our Resource Library is here to support you every step of the way on your family-building journey.
                  Explore articles, guides, and helpful tools specifically designed for LGBTQ+ individuals and families.
                  Whether you're looking for medical information, legal guidance, or community support, we've compiled
                  a variety of resources to empower you with the knowledge you need to make informed decisions.
                  Navigate through topics that matter most to you and find the information you need to move forward with confidence.
                </Text>
              </div>
            </div>

            {/* Search Bar */}
            <Form style={{ paddingBottom: 0, width: '100%', maxWidth: '800px' }}>
              <Form.Item name="search" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                <Input 
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                />
              </Form.Item>
            </Form>

            {/* Resource Cards */}
            <Row gutter={[24, 24]} justify="center">
              {filteredResources.map((resource, index) => (
                <Col xs={24} sm={24} md={12} lg={8} key={index}>
                  <Card 
                    className="resource-link" 
                    bordered={false} 
                    hoverable 
                    style={{ 
                      borderRadius: '10px', 
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.2s',
                      minHeight: '100%'
                    }}
                    bodyStyle={{ padding: '20px' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Title level={3} style={{ color: 'inherit', marginBottom: '10px' }}>{resource.title}</Title>
                    <Text style={{ color: 'inherit', marginBottom: '10px', display: 'block', fontSize: '1vw'
                     }}>{resource.description}</Text>
                    <div style={{ marginTop: '20px' }}>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1890ff', textDecoration: 'underline' }}>
                        More Info
                      </a>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default ResourceLibrary;
