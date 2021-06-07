import React from 'react';
import 'antd/dist/antd.css';
import './transaction.css';
import { Tabs } from 'antd';
import {Card} from 'antd'

const { TabPane } = Tabs;
const Transactions=()=>{
    return(
        <Card className='carte'>
        <div className="card-container">
           
        <Tabs type="card" className='card'>
          <TabPane tab="LAST MONTH" key="1">
            <p>Transport:500rwf</p>
            <p>food1:600rwf</p>
            <p>school fees:400rw</p>


            <p>TOTAL-TRANS:................</p>
          </TabPane>
          <TabPane tab="THIS MONTH" key="2">
          <p>Transport:5020rwf</p>
            <p>food1:6040rwf</p>
            <p>school fees:4060rw</p>

            <p>TOTAL-TRANS:................</p>
          </TabPane>
          <TabPane tab="FUture MONTH" key="3">
          <p>Transport:5000rwf</p>
            <p>food1:6000rwf</p>
            <p>school fees:4000rw</p>

            <p>TOTAL-TRANS:................</p>
          </TabPane>
          
           
        </Tabs>
        
      </div>
      </Card>
    )
}




export default Transactions;