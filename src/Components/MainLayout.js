import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {

  UserOutlined,
  MenuOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const MainLayout=({children}) =>{
    const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
  };

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width="12vh" style={{minHeight: "200vh", position:"fixed"}}>
          <div className="siderIcon" />

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          <Menu.Item key="1" icon={<MenuOutlined style={{fontSize:"15px"}} />}></Menu.Item>

            <Menu.Item key="2" icon={<UserOutlined style={{fontSize:"15px"}}/>}>
              
            </Menu.Item><p style={{fontSize:"12px", marginTop:"-15px", marginLeft:"10px"}}>Transaction</p>

            <Menu.Item key="3" icon={<VideoCameraOutlined style={{fontSize:"15px"}}/>}>
            </Menu.Item><p style={{fontSize:"12px", marginTop:"-15px", marginLeft:"16px"}}>Budget</p>

            <Menu.Item key="4" icon={<UploadOutlined style={{fontSize:"15px"}}/>}>
            </Menu.Item><p style={{fontSize:"12px", marginTop:"-15px", marginLeft:"16px"}}>Report</p>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            ({children})
          </Content>
        </Layout>
      </Layout>
    );
  }




export default MainLayout;