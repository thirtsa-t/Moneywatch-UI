import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Form,
  Modal,
  Statistic,
   Row,
    Col, 
    Button,
  Card,
  Layout,
  Progress
} from "antd";

import AddTransaction from './addTransaction';
const { Header, Content, Footer, Sider } = Layout;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const getFields = () => {
    const count = expand ? 10 : 6;
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

const Report = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };
  
  return (
    <Card className="report-container">
 <Row gutter={16}>
    <Col span={12} >
      <h1 className="balance-word">Start balance</h1>
      <Statistic   className="balance2"  value={112893} />
      <Button style={{ marginTop: 16 }} type="primary">
        Edit
      </Button>
    </Col>
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
    <Col span={12} >
      <h1 className="balance-word">Current balance </h1>
      <Statistic  className="balance2" value={112893} precision={2} />
     
    </Col>
  </Row>    
  <hr></hr>
<Row >
    <Col span={6}  style={{margin:'20px 10px 10px 30px'}}>
      {/* <Statistic  className="balance2" title="Expected Income" value={100000} precision={2} /> */}
      <h1 className="balance-word">Expected Income</h1>
      <Statistic   className="balance2"  value={112893} />
    <Progress
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#87D068',
      }}
      percent={100}
    />
      <div style={{margin:'80px 10px 10px 5px'}}>
      {/* <Statistic  className="balance2" title="Actual Income" value={20000} precision={2} /> */}
      <h1 className="balance-word">Actual Income</h1>
      <Statistic   className="balance2"  value={112893} />
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#87D068',
      }}
      percent={20}
    />
    </div>
    </Col>
    <Col span={6}  style={{margin:'20px 10px 10px 30px'}}>
      {/* <Statistic  className="balance2" title="Expected expenses" value={100000} precision={2} /> */}
      <h1 className="balance-word">Expected expenses</h1>
      <Statistic   className="balance2"  value={112893} />
    <Progress
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#87D068',
      }}
      percent={100}
    />
    <div style={{margin:'80px 10px 10px   5px'}}>
      {/* <Statistic  className="balance2" title="Actual expenses" value={20000} precision={2}/> */}
      <h1 className="balance-word">Actual expenses</h1>
      <Statistic   className="balance2"  value={112893} />
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#FF0000',
      }}
      percent={100}
    />
    </div>
    </Col>
    <Col span={6} style={{margin:'20px 10px 10px 30px'}}>
      {/* <Statistic  className="balance2" title="expected Savings" value={100000} precision={2}/>  */}
      <h1 className="balance-word">Expected savings</h1>
      <Statistic   className="balance2"  value={112893} />
    <Progress
      strokeColor={{
        '0%': '#108EE9',
        '100%':'#87D068 ',
      }}
      percent={60}
    />
       <div style={{margin:'80px 10px 10px 5px'}}>
      {/* <Statistic  className="balance2" title="Actual Savings" value={20000} precision={2} /> */}
      <h1 className="balance-word">Actual Savings</h1>
      <Statistic   className="balance2"  value={112893} />
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#108EE9',
        '100%': '#87D068' ,
      }}
      percent={80}
    />
    </div>
    </Col>
</Row>


    </Card>
  );
};
export default Report;