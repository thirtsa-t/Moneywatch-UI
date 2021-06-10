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
        Edit
      </Button>
    </Col>
  </Row>    
  <hr></hr>
<Row >
    <Col span={6}  style={{margin:'20px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="Expected Income" value={100000} precision={2} />
    <Progress
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#87D068',
      }}
      percent={100}
    />
      <div style={{margin:'80px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="Actual Income" value={20000} precision={2} />
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#87D068',
      }}
      percent={20}
    />
    </div>
    </Col>
    <Col span={6}  style={{margin:'20px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="Expected expenses" value={100000} precision={2} />
    <Progress
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#87D068',
      }}
      percent={100}
    />
    <div style={{margin:'80px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="Actual expenses" value={20000} precision={2}/>
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#FF0000',
      }}
      percent={100}
    />
    </div>
    </Col>
    <Col span={6} style={{margin:'20px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="expected Savings" value={100000} precision={2}/> 
    <Progress
      strokeColor={{
        '0%': '#108EE9',
        '100%':'#87D068 ',
      }}
      percent={60}
    />
       <div style={{margin:'80px 10px 10px 30px'}}>
      <Statistic  className="balance2" title="Actual Savings" value={20000} precision={2} />
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#87D068' ,
      }}
      percent={80}
    />
    </div>
    </Col>
</Row>


    </Card>
  );
};
export default Report;