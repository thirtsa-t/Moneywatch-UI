import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import profilepic from "../Asset/profilepic.jpg";
import { Layout, Menu } from 'antd';
import {HomeOutlined,
  FileOutlined,
  DownloadOutlined ,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TwitterOutlined,
  GithubOutlined,
  CodepenOutlined, 
  LinkedinOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const MainLayout=({children}) =>{
 const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
 
 };
 const Name="thirtsa"
    return (

      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={
           {minHeight:"100vh",position:'fixed' }}>
          
          
             <img src={profilepic}alt="logo" className="logo" />

      <h1 className="my-Name" > thirtsa isimbi</h1>
      <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <GithubOutlined  className="Social-Icon"/>
      <LinkedinOutlined className="Social-Icon"/>
      <TwitterOutlined className="Social-Icon"/>
      <CodepenOutlined className="Social-Icon" />
      </Menu>
      </div>
      
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined  />}>
              About
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              Resume
              </Menu.Item >
              <Menu.Item key="4" icon={ <DownloadOutlined />}>
                portfolio
                </Menu.Item>
              <Menu.Item key="5" icon={ <DownloadOutlined />}>
                servies
              </Menu.Item>
          </Menu>
          <p className="footer-text">©Copyright<span> iPortfolio</span>
           
            
          </p>
          <p className="text"> Designed by <span> SheCanCode </span></p>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header> */}
          <Content
            className="site-layout-background"
            style={{
               margin: '0px 0px',
              padding: 0,
              minHeight: "100vh",
            }}
          
          >
            

            {children}
          </Content>
        </Layout>
      </Layout>
    );
}
export default MainLayout;
