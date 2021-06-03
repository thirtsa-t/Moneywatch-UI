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
            Email: SheCanCode@gmail.com 
            </h2>

        </Card>
        <div className='footer'>
                <footer>
                   <p1 className=''>terms of service </p1> 
                    <p1 > privacy of policy</p1>
                    <p2 style={{float: 'right'}}>Copyright@2021MoneyWatch</p2>
                </footer>
            </div>
        </>
    )
}
        export default Contactpage;