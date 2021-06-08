import React from 'react';
import { Card } from 'antd';
import './index.css';





const Contactpage=()=>{
    return(
        <>
        <Card>
            <h1>
            Contact us
            </h1>
            <h2>
            Phone: +250 789 098 736
            
            </h2>
            <h3 className='h3Contactus'>
            Email: SheCanCode@gmail.com   
            </h3>

        </Card>
        <div className='footer'>
                <footer>
                   <p1 className=''>terms of service </p1> 
                    <p2 style={{justifycontent:'space-between'}}> privacy of policy</p2>
                    <p3 style={{float: 'right'}}>Copyright@2021MoneyWatch</p3>
                </footer>
            </div>
        </>
    )
}
        export default Contactpage;