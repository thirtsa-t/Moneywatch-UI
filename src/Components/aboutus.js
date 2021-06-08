import React from 'react';
import { Card } from 'antd';
import './index.css';
import aboutImage from '../Assets/aboutImage.PNG'

const aboutpage=()=>{
    return(
        <Card>
            <div>
                <h1 className='about'>
                    How it worKs
                </h1>
                <p className='about-us'>Money watch helps you get just about everything managed.
                 A smart, easy-to-use app that allows you to track and categorize your in-and-out money, create budgets that you can actually stick to. 
                 It works seamlessly across devices and platforms, available on phone, tablet, PC and Web.</p>
                 <img src={aboutImage} Alt='aboutImage' style={{ width: '40% ' }}></img> 
            </div>
        </Card>


    )
}
export default aboutpage;