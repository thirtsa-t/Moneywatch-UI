import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Button, Affix, Modal, Form, Input, Radio } from 'antd';
import {
  MenuOutlined,
  PieChartOutlined,
  WalletOutlined,
  MoneyCollectOutlined,
  ReconciliationOutlined,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add transaction"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};


const MainLayout = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {

    setCollapsed(collapsed);
  }

  const [bottom, setBottom] = useState(10);
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}  style={{ backgroundColor: "white",minHeight: '100vh' }}>
        <div className="logo" />
        <Menu theme="white" defaultSelectedKeys={['1']} mode="inline" className="menu-icon">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            
        </Menu.Item>
          <Menu.Item key="2" icon={<MenuOutlined />}>
            
        </Menu.Item>
          <Menu.Item key="sub1" icon={<ReconciliationOutlined />} >Report
          
          </Menu.Item>
          <Menu.Item key="sub2" icon={<MoneyCollectOutlined />}>Bugdet
      
          </Menu.Item>
          <Menu.Item key="9" icon={<WalletOutlined />}>
            Transaction
        </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 ,backgroundColor: "white"}} >
        <Link to="/dashboard">
        <Button type="primary"  htmlType="submit" className="logout-form-button">
              Log out
        </Button> 
      </Link>
      <Button type="primary"  htmlType="submit" className="add-button">
              Add
        </Button> 
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Button
            type="primary"
            shape="circle"
            className="add-trans"
            onClick={() => {
              setVisible(true);
            }}
          >
            +
      </Button>

          <CollectionCreateForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          
          />
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout;