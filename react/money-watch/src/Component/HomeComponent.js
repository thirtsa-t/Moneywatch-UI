import React from 'react';
import "./index.css";
import Typewriter from 'typewriter-effect';
import {Card} from 'antd'



const HomeComponent = () => {
    return (
        <div className="Home-Container"  style={
            { color:'white' ,}}>

                <div className="home-content"   style={
            { color:'white', }}>thirtsa isimbi</div> 
            
            <p className="txt">i'm</p>
            <div className="typewriter-text">
            <Typewriter 
            
                options ={{
                    strings: [ 'Developer', 'Fullstack '],
                    autoStart: true,
                    loop: true,
                }}
            />
            </div>
        </div>
    )
};



export default HomeComponent;