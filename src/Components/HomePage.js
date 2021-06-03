
import React from 'react';
import image from '../Assets/image.jpg'
import './index.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';



const contentStyle = {
   
  };
  
const Homepage=()=>{
    return( 
        <div  className=' home-layout'>
            
            
            <h1 style={{ margin: '3% 0% 0% 8%', font: '15px',color:'white' }}>Money watch 
            
              </h1> 
             <h1 className='home'>English</h1>
             <p className='middle-paragraphy'>MoneyWatch</p>
             <p1 className='about-paragraphy'>“LET YOUR DREAM COMES  AND PLANS COMES TRUE”</p1>
             <div>
             <Button type="primary" htmlType="link" className="home-button">
           <Link to="/mainlayout">Let's Get Started.</Link>
          </Button>
          </div>
             
  
  </div>
   


  )
  }
  

            

            
            
          
export default Homepage;