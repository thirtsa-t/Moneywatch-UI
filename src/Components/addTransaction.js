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

const AddTransaction = () => {
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
          <Form.Item label=" Transaction Type"  >
            <Input.Group compact>  
              <Form.Item
                name="category"
                noStyle
                rules={[{ required: true, message: "Category is required" }]}
              >
                <Select placeholder="Select Category">
                  <Option value="income">Income</Option>
                  <Option value="expense">Expense</Option>
                  <Option value="saving">Saving</Option>
                </Select>
                
              </Form.Item>
          
      
            </Input.Group>
          </Form.Item>    <Col span={12}>
          <Form.Item label="Amount" >
            <Input.Group compact>
              <Form.Item
                name="category"
                noStyle
                rules={[{ required: true, message: "Amount is required" }]}
              >
                <Select placeholder="insert amount" >
                 
                
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>

        </Col>
      

          <Form.Item label="Date">
            <Space>
              <Form.Item
                name="Date"
                noStyle
                rules={[{ required: true, message: "Date is required" }]}
              >
                <Input style={{ width: 100 }} placeholder="12/12/2020" />
              </Form.Item>
              
            </Space>
          
      
          </Form.Item>
          <Form.Item label="Comment">
            <Space>
              <Form.Item
                name="username"
                noStyle
                rules={[{ required: true, message: "Comment is required" }]}
              >
                <Input style={{ width: 300 }} placeholder="Note....." />
              </Form.Item>
             
            </Space>
          </Form.Item>
        </Col>
        
    

        {/* column 2 */}
        <Col span={12} >
          <Form.Item label="Category">
            <Input.Group compact>
              <Form.Item
                name="category"
                noStyle
                rules={[{ required: true, message: "Category is required" }]}
              >
                <Select placeholder="Select Category">
                  {category.map((cat) => {
                    return <Option value="Zhejiang">{cat}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>

        </Col>
        
      </Row>
    
      
    </Form>
  );
};

export default AddTransaction;
