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
 <Row gutter={16}>
    <Col span={12}>
      <Statistic   className="balance2" title="Start balance" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic  className="balance2" title="Current Balance " value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Change
      </Button>
    </Col>
  </Row>    
  <hr></hr>
<Row >
    <Col span={6}  style={{margin:'0px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="Excpected Income" value={100000} precision={2} />

    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
    />
      <Statistic  className="balance2" title="Actual Income" value={20000} precision={2} />
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={20}
    />
    </Col>


    <Col span={6}  style={{margin:'0px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="Excpected Income" value={100000} precision={2} />

    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
    />
      <Statistic  className="balance2" title="Actual Income" value={20000} precision={2} />
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={20}
    />
    </Col>

    <Col span={6} style={{margin:'0px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="Excpected Income" value={100000} precision={2} />

    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
    />
      <Statistic  className="balance2" title="Actual Income" value={20000} precision={2} />
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={20}
    />
    </Col>

</Row>

<hr></hr>
<h1></h1>

    </Card>
  );
};

export default Report;
