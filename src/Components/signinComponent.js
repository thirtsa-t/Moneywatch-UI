import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox, Card  } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined,FacebookOutlined  } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const signinComponent = () => {
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <Card className="signuptop-form">

        <h1 className="signup-header">MONEY WATCH</h1>


      </Card>
      <Card className="signin-form">

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                message: 'Please input your email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon"  />} placeholder="Email" style={{
                width: '50%' }} />
           
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              style={{
                width: '50%' }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" danger icon={<GoogleOutlined />}  style={{
                width: '50%' }}>
              connect with google
    </Button>


          </Form.Item>
          <Form.Item>

          <Button type="primary " icon= {<FacebookOutlined />}  style={{
                width: '50%' }}>connect with facebook</Button>

          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
        </a>
          </Form.Item>
          <Form.Item>
            
              <Button type="primary"  htmlType="submit" className="login-form-button">
              Log in
        </Button> 
        Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default signinComponent;