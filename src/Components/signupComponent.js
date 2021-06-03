import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import './index.css';
import { useHistory } from 'react-router-dom';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Card, notification } from 'antd';


const SignupComponent = () => {
  const history = useHistory();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);


  }
  const [form] = Form.useForm();
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <>

      <Card className="signuptop-form">

      <Link to="/home">  <h1 className="signup-header">Money watch</h1> </Link> 


      </Card>
      <Card className="signup-form">
        <h1 className="register">Register</h1>
        <Form
          form={form}
          name="register"
          initialValues={{
            residence: ['kigali', 'Rwanda'],
          }}
          scrollToFirstError
          onFinish={onFinish}
        >


          <Form.Item
            name="firstName"
            label="FirstName"
            rules={[
              {
                required: true,
                message: 'Please input your FirstName!',
              },
            ]}
          >
            <Input
              style={{
                width: '80%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="LastName"
            rules={[
              {
                required: true,
                message: 'Please input your LastName!',
              },
            ]}
          >
            <Input
              style={{
                width: '80%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input
              style={{
                width: '80%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              style={{
                width: '80%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',

              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              style={{
                width: '80%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              style={{
                width: '80%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'are you a roboot?',
              },
            ]}
          >
            <Input
              style={{
                width: '80%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please input your address',
              },
            ]}
          >
            <Input
              style={{
                width: '80%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
        </Button>
          </Form.Item>
        </Form>



      </Card>



    </>
  );
}

export default SignupComponent;