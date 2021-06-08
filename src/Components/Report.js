import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Form,
  Input,
  Select,
  Statistic,
   Row,
    Col, 
    Button,
  Tooltip,
  Space,
  Typography,
  Card,
  Layout,
  Progress

} from "antd";
const { Header, Content, Footer, Sider } = Layout;

const Report = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card className="report-container">
      <Layout>
   <Header className="site-layout-background" style={{ padding: 0 ,backgroundColor: "white"}} >
   <Row gutter={16}>
    <Col span={12}>
      <Statistic   className="balance2" title="Start balance" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic  className="balance2" title="End Balance " value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Change
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Status" value={112893} loading />
    </Col>
  </Row>,
        </Header>
        <Content style={{backgroundColor: "white"}} >
          <div ><Row gutter={16}>
    <Col span={12}>
      <Statistic   className="balance2" title="Expected expenses" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic  className="balance2" title="Actual expenses " value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Change
      </Button>
    </Col>
  </Row>,   
          </div>
          <div><Row gutter={16}>
    <Col span={12}>
      <Statistic   className="balance2" title="Expected income" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic  className="balance2" title="Actual income " value={112893} precision={2} />
      
    </Col>
  </Row>,   </div>
          <div><Row gutter={16}>
    <Col span={12}>
      <Statistic   className="balance2" title="Expected expenses" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic  className="balance2" title="Actual expenses " value={112893} precision={2} />
      
    </Col>
  </Row>,   </div>
  <div><Row gutter={16}>
    <Col span={12}>
      <Statistic   className="balance2" title="Expected savings" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic  className="balance2" title="Actual savings " value={112893} precision={2} />
      
    </Col>
  </Row>,   </div>
        </Content>
        </Layout>
    </Card>
  );
};

export default Report;
