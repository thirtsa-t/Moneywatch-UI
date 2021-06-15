import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Space,Card,Tabs,Form,
  Modal } from 'antd';
import dataExpense from '../Assets/data/bugdeteExpenses.json';
import dataIncome from '../Assets/data/budgetIncome.json';
import dataSaving from '../Assets/data/budgetSavings.json';
import AddBudget from './addBudget';

const { TabPane } = Tabs;
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
      title="Add Budget"
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
      <AddBudget/>
    </Modal>
  );
};
const Budget=()=>{
  const [filteredInfo,setFilteredInfo]=useState(null);
  const [sortedInfo, setSortedInfo]=useState(null);
  const columns = [
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
     
    },
    {
      title: 'Name',
      dataIndex: 'categoryName',
      key: 'categoryName',
      ellipsis: true,
      
    
    },
    {
      title: 'Expected Amount',
      dataIndex: 'Amount',
      key: 'Amount',
    
      ellipsis: true,
   
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    }
  ];

const handleChange = (pagination,  sorter) => {
  console.log('Various parameters', pagination, sorter);

    setSortedInfo( sorter)

};
const [visible, setVisible] = useState(false);
const onCreate = (values) => {
  console.log("Received values of form: ", values);
  setVisible(false);
};

    return(
      
        <Card >   <div className="card-container">

<Button type="primary" style={{float: 'right'}}  
            onClick={() => {
              setVisible(true);}}>Add</Button>
<CollectionCreateForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
        <Tabs type="card">
          <TabPane tab="expenses" key="1">

            
          <Table columns={columns} dataSource={dataExpense} onChange={handleChange} />
          </TabPane>
          <TabPane tab="Income" key="2">
          <Table columns={columns} dataSource={dataIncome} onChange={handleChange} />
          </TabPane>
          <TabPane tab="Savings" key="3">
          <Table columns={columns} dataSource={dataSaving} onChange={handleChange} />
          </TabPane>
        </Tabs>
      </div>,
        
      </Card>
    )
}


export default Budget;