import React from 'react';
import Home from '../Views/Home';
import SignIn from '../Views/SignIn';
import SignUp from '../Views/SignUp';
import {Route, Switch} from 'react-router-dom';


const Index=()=>{
return (
<switch>
    <Route component={Home} exact path={["/","/home"]}/>
    <Route component={SignIn} exact path={["/signin"]}/>
    <Route component={SignUp} exact path={["/signup"]}/>
 
</switch>
)
}
export default Index;