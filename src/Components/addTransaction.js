import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
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
          <Form.Item label="Type">
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
          </Form.Item>

          <Form.Item label="Username">
            <Space>
              <Form.Item
                name="username"
                noStyle
                rules={[{ required: true, message: "Username is required" }]}
              >
                <Input style={{ width: 160 }} placeholder="Please input" />
              </Form.Item>
              <Tooltip title="Useful information">
                <Typography.Link href="#API">Need Help?</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>
          <Form.Item label="Username">
            <Space>
              <Form.Item
                name="username"
                noStyle
                rules={[{ required: true, message: "Username is required" }]}
              >
                <Input style={{ width: 160 }} placeholder="Please input" />
              </Form.Item>
              <Tooltip title="Useful information">
                <Typography.Link href="#API">Need Help?</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>
        </Col>

        {/* column 2 */}
        <Col span={12}>
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
