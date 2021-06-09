import React ,{useState}from 'react';

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Space,Card } from 'antd';
import data from '../Assets/data/transactions.json';

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

    return(
      
        <Card >
          <h1>Transactions</h1>
        <Table columns={columns} dataSource={data} onChange={handleChange} />
      </Card>
    )
}




export default Transactions;