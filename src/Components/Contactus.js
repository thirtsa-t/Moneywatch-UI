import React from 'react';
import { Card } from 'antd';
import './index.css';





const Contactpage=()=>{
    return(
        <>
        <Card>
             
            <h1 style={{ fontSize:'50px'}} >
            Contact us
            </h1>
            <h2>
            Phone: +250 789 098 736
            
            </h2>
            <h3 style={{ fontSize:'20px'}}>
            Email: SheCanCode@gmail.com   
            </h3>

        </Card>
        <div className='footer'>
                <footer>
                   <p1 style={{marginRight: '10%', color:'white', fontSize:'20px'}} >terms of service </p1> 
                    <p2 style={{marginLeft: '25%', color:'white', fontSize:'20px'}}> privacy of policy</p2>
                    <p3 style={{float: 'right', color:'white', fontSize:'20px'}}>Copyright@2021MoneyWatch</p3>
                </footer>
            </div>
        </>
    )
}
        export default Contactpage;