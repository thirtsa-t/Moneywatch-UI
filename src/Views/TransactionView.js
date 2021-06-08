import React from 'react';
import Report from '../Components/Report';
import Transactions from '../Components/Transactions';
import MainLayout from '../Components/MainLayout';


const TransactionView  =()=>{
    return(
        <MainLayout>
        
            <Transactions></Transactions>
       </MainLayout>
    )
}
export default TransactionView;