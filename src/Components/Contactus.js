import React from 'react';
import { Card } from 'antd';
import './index.css';





const Contactpage=()=>{
    return(
        <Card>
            <h1>
            Contact us
            </h1>
            <h2>
            Phone: +250 789 098 736
            Email: SheCanCode@gmail.com 
            </h2>
            <div className='footer'>
                <footer>
                   <p className='foots'>terms of service</p> 
                    <p1 className='foot'> privacy of policy</p1>
                    <p2 className='feet'>Copyright@2021MoneyWatch</p2>
                </footer>
            </div>

        </Card>
    )
}
        export default Contactpage;