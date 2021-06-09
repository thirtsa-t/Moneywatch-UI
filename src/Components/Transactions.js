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
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    ellipsis: true,
  },
  {
    title: 'Trans-Type',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
    ellipsis: true,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
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