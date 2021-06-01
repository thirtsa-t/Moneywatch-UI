import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../Components/HomePage';
import aboutus from '../Components/aboutus';
import Contactus from '../Components/Contactus';

const Index=()=>{
    return (
    <switch>
 <Route component={HomePage} exact path={["/","/homePage"]}/>
 <Route component={aboutus} exact path={["/","/aboutus"]}/>
 <Route component={Contactus} exact path={["/","/Contactus"]}/>

        </switch>
    )
}


export default  Index;