import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Space,Card,Tabs } from 'antd';
import dataExpense from '../Assets/data/bugdeteExpenses.json';
import dataIncome from '../Assets/data/budgetIncome.json';
import dataSaving from '../Assets/data/budgetSavings.json'

const { TabPane } = Tabs;

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

    return(
      
        <Card >   <div className="card-container">
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