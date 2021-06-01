import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../Views/HomePageView';
import Aboutus from '../Views/AboutusView';
import Contactus from '../Views/ContactusView';
 import MainLayout from '../Views/Home';

const Index=()=>{
    return (
    <Switch>
 <Route component={HomePage} exact path={["/","/homePage"]}/>
 <Route component={Aboutus} exact path={["/aboutus"]}/>
 <Route component={Contactus} exact path={["/contactus"]}/>
   <Route component={MainLayout} exact path={["/mainlayout"]}/>  

        </Switch>
    )
}


export default  Index;