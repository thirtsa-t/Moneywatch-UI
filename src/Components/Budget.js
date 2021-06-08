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

const Bugdet = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card className="report-container">
      <Layout>
   <Header className="site-layout-background" style={{ padding: 0 ,backgroundColor: "white"}} >
   kjdgjn
        </Header>
        <Content style={{backgroundColor: "white"}} >
      fdijdsifjssdi
        </Content>
        </Layout>
    </Card>
  );
};

export default Bugdet;
