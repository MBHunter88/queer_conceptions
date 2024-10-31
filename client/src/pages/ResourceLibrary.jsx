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
    title: "Modern Fertility",
    description: "Modern Fertility will guide you through your fertility hormones now, so you have options later, whether you want kids now or in the far-off future.",
    link: "https://ro.co/fertility/#access-for-all"
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
  {
    title: "Resolve: The National Infertility Association",
    description: " Resolve offers information specifically for LGBTQ+ individuals, covering topics such as IVF, surrogacy, and other pathways to conception, while focusing on inclusivity.",
    link: "https://resolve.org/what-are-my-options/lgbtq-family-building"
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
    <Layout>
      <Content style={{ height: '100%', padding: '50px 20px' }}>
        <div className="resource-library">
          <Form style={{ paddingBottom: 40 }}>
            <Form.Item label="Search" name="search">
              <Input placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            </Form.Item>
          </Form>

          <Row gutter={[0, 40]} justify="center">
            <Title level={2}>Resources</Title>
            <Text>
              Our Resource Library is here to support you every step of the way on your family-building journey.
              Explore articles, guides, and helpful tools specifically designed for LGBTQ+ individuals and families.
              Whether you're looking for medical information, legal guidance, or community support, we've compiled
              a variety of resources to empower you with the knowledge you need to make informed decisions.
              Navigate through topics that matter most to you and find the information you need to move forward with confidence.

            </Text>
            {filteredResources.map((resource, index) => (
              <Col span={24} key={index}>
                <Card className="resource-link" bordered={false}>
                  <Title level={2} style={{ color: 'inherit' }}>{resource.title}</Title>
                  <Text style={{ color: 'inherit' }}>{resource.description}</Text>
                  <div style={{ marginTop: '20px' }}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      More Info
                    </a>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default ResourceLibrary;
