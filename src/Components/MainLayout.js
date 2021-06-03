import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu ,Button, Modal, Form, Row, Col,Input} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined, 
  UpOutlined,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 5 : 3;
    const children = [];

    for (let i = 0; i < count; ) {
      
      children.push(
        <Col span={12} key={i}>
          <Form.Item
            
            
          >
            
            <Input placeholder="Add Transaction"/>
            
          </Form.Item>
        </Col>,
      );
    }

    return children;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Modal
      visible={visible}
      title="Add transaction"
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
     <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={12}>{getFields()}</Row>
      <Row>
        <Col
          span={12}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit">
            
          </Button>
         
           
          
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
    </Modal>
  );
};


const MainLayout =({children})=>{

const [collapsed ,setCollapsed]=useState(false);

const onCollapse =(collapsed)=>{

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
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
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