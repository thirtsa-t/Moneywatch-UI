import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu,Card} from 'antd';
import {

  SearchOutlined,
  GithubOutlined,
  LinkedinFilled,
  TwitterOutlined,
  SlackSquareOutlined, 
  WalletOutlined,
  MenuOutlined,
  MoneyCollectOutlined, 
  QuestionCircleFilled,
  
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const Report=({children}) =>{
    const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
  };

    return (
      <Card>
      <Layout>
        <Sider className='ant-menu' trigger={null} collapsible collapsed={collapsed} width="10vh" 
        style={{minHeight: "200vh", position:"fixed", backgroundColor:"white"}}>
          <div className="siderIcon" />

          <Menu mode="inline" defaultSelectedKeys={['0']}>
          <Menu.Item key="1" icon={<MenuOutlined style={{fontSize:"15px"}} />}></Menu.Item>

            <Menu.Item key="2" icon={<WalletOutlined style={{fontSize:"18px", marginTop:"20px"}}/>}>
            </Menu.Item><p style={{fontSize:"10px", marginTop:"5px", marginLeft:"10px"}}>Transaction</p>

            <Menu.Item key="3" icon={<MoneyCollectOutlined style={{fontSize:"18px", marginTop:"20px"}}/>}>
            </Menu.Item><p style={{fontSize:"10px", marginTop:"5px", marginLeft:"16px"}}>Budget</p>

            <Menu.Item key="4" icon={<QuestionCircleFilled  style={{fontSize:"18px", marginTop:"20px"}}/>}>
            </Menu.Item><p style={{fontSize:"10px", marginTop:"5px", marginLeft:"16px"}}>Report</p>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          
          <Header className="header-layout" width="10vh" style={{ padding: 0, backgroundColor:"white" }}>
          <div className="headerIcon">
        
    
          <SearchOutlined className="searchIcon"/>
          </div> 
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
      </Card>

    );
  }




export default Report;