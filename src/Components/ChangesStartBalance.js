import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./transaction.css";
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Tooltip,
  Button,
  Space,
  Typography,
} from "antd";
import category from '../Assets/data/categories.json'
const { Option } = Select;

// const category = ["Transport", "Food", "Clothes", "bills",""];

const ChangeStartBalance = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
 
  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
   
      <Row>
        <Col span={12}>
        <Form.Item label="Start Balance">
            <Space>
              <Form.Item
                name="start-balance"
                noStyle
                rules={[{ required: true, message: "Balance is required" }]}
              >
                <Input style={{ width: 300 }} placeholder="2300" />
              </Form.Item>
             
            </Space>
          </Form.Item>

        </Col>
        
    

        
      </Row>
    
      
    </Form>
  );
};

export default ChangeStartBalance;
