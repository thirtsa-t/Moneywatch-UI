
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
import AddTransaction from './addTransaction';
import Report from './Report';
import Budget from './Budget'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const getFields = () => {
    const count = expand ? 5 : 3;
    const children = [];
    return children;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Modal
      visible={visible}
      title="Add transaction"
      width="60%"
      okText="Save"
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
      <AddTransaction/>
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
 return(
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}  style={{ backgroundColor: "white",minHeight: '100vh' }}>
        <div className="logo" />
        <Menu theme="red" defaultSelectedKeys={['1']} mode="inline" className="menu-icon">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
        </Menu.Item>
          <Menu.Item key="2" icon={<MenuOutlined />}>
        </Menu.Item>
          <Menu.Item key="sub1" icon={<ReconciliationOutlined />} >
        <Link to="Report"> 
            Report
            </Link>
          </Menu.Item>
          <Menu.Item key="sub2" icon={<MoneyCollectOutlined />}> 
          <Link to="Budget"> 
          Bugdet
          </Link>
          </Menu.Item>
        
           <Menu.Item key="9" icon={<WalletOutlined />}>
           <Link to="/transaction">
            Transaction
            </Link>
          </Menu.Item>
       
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 ,backgroundColor: "white"}} >
        <Link to="/signin">
        <Button type="primary"  htmlType="submit" className="logout-form-button">
              Log out
        </Button> 
      </Link>
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
        <Footer style={{ textAlign: 'center' }}>twisted boot coders©2021 Created by Money Watch</Footer>
      </Layout>
    </Layout>
  )
}
export default MainLayout;