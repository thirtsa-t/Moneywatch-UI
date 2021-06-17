import React ,{useState}from 'react';

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Space,Card,Form,
  Modal} from 'antd';
import data from '../Assets/data/transactions.json';
import AddTransaction from './addTransaction';

// const data = 

const Transactions=()=>{

const [filteredInfo,setFilteredInfo]=useState(null);
const [sortedInfo, setSortedInfo]=useState(null);
const columns = [
  {
    title: 'Date',
    dataIndex: 'Date',
    key: 'Date',
    sorter: (a, b) => a.Date - b.Date,
    ellipsis: true,
  },
  {
    title: 'Trans-type',
    dataIndex: 'transactionType',
    key: 'transactionType',
    filters: [
       { text: 'Income', value: 'expenses' },
     { text:'expenses' , value:'Income' },
    ],
    ellipsis: true,
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Amount',
    sorter: (a, b) => a.Amount.length - b.Amount.length,
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

    return(
      
        <Card >
          <h1>Transactions</h1>
          
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
        <Table columns={columns} dataSource={data} onChange={handleChange} />
      </Card>
    )
}




export default Transactions;