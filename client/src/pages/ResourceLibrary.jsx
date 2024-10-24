import React from 'react';
import { Card, Typography, Form, Input, Layout, Row, Col } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const ResourceLibrary = () => {

//TODO: Logic fo search bar functionality 

  return (
    <Layout>
      <Content style={{ height: '100%', padding: '50px 20px' }}>
        <div className="resource-library">
          <Form style={{ paddingBottom: 40 }}>
            <Form.Item label="Search" name="search">
              <Input placeholder="Search resources..." />
            </Form.Item>
          </Form>
          <Row gutter={[0, 40]} justify="center">

            <Col span={24}>
              <Card
                className="resource-link"
                bordered={false}
              >
                <Title level={2} style={{ color: 'inherit' }}>IVF</Title>
                <Text style={{ color: 'inherit' }}>
                  In vitro fertilization (IVF) is a method of assisted reproduction in which sperm and eggs are
                  combined in a laboratory setting to allow for fertilization outside of the body with subsequent
                  transfer of the embryo back into the uterus.
                </Text>
                <div style={{ marginTop: '20px' }}>
                  <a href='' style={{ color: 'inherit', textDecoration: 'underline' }}>More Info</a>
                </div>
              </Card>
            </Col>

            <Col span={24}>
              <Card
                className="resource-link"
                bordered={false}
              >
                <Title level={2} style={{ color: 'inherit' }}>IUI/ICI</Title>
                <Text style={{ color: 'inherit' }}>
                  Intrauterine Insemination (IUI): Sperm is inserted directly into the uterus to facilitate conception. <br />
                  Intracervical Insemination (ICI): Sperm is inserted directly near the cervix. This is often done at home
                  and may be used by those seeking a less clinical option.
                </Text>
                <div style={{ marginTop: '20px' }}>
                  <a href='' style={{ color: 'inherit', textDecoration: 'underline' }}>More Info</a>
                </div>
              </Card>
            </Col>

            <Col span={24}>
              <Card
                className="resource-link"
                bordered={false}
              >
                <Title level={2} style={{ color: 'inherit' }}>Gestational Surrogacy</Title>
                <Text style={{ color: 'inherit' }}>
                  In gestational surrogacy, the surrogate (or gestational carrier, or GC) carries a child conceived
                  of the egg and sperm of two other individuals. Specifically, the sperm of the intended parent or
                  sperm donor, as well as the egg from the intended parent or an egg donor are fertilized and
                  transferred, via IVF, into the gestational carrier.
                </Text>
                <div style={{ marginTop: '20px' }}>
                  <a href='' style={{ color: 'inherit', textDecoration: 'underline' }}>More Info</a>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default ResourceLibrary;
