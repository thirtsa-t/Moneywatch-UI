import React from 'react';
import { Card } from 'antd';
import './index.css';
import aboutImage from '../Assets/aboutImage.PNG'
import video from '../Assets/video.mp4';

const aboutpage=()=>{
    return(
        <Card>
            <div>
                <h1 style={{ fontSize:'50px'}}>
                    HOW IT WORKS
                </h1>
                 {/* <img src={aboutImage} Alt='aboutImage' style={{ width: '40% ' }}></img>   */}
                 <video  width="50%"  controls>
                 <source src={video} type="video/mp4"></source>
                 </video>

                 
                <p style={{ marginLeft: '55% ' ,fontSize:'3vh',marginTop:'-39vh' }}>Money watch helps you get just about everything managed.
                 A smart, easy-to-use app that allows you to track and categorize your in-and-out money, create budgets that you can actually stick to. 
                 It works seamlessly across devices and platforms, available on phone, tablet, PC and Web.</p>
                 

                 
            </div>
        </Card>


    )
}
export default aboutpage;