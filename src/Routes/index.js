import React from 'react';
import HomePage from '../Views/HomePageView';
import Aboutus from '../Views/AboutusView';
import Contactus from '../Views/ContactusView';
import MainLayout from '../Views/Home';
import SignIn from '../Views/SignIn';
import SignUp from '../Views/SignUp';
import { Route, Switch } from 'react-router-dom';


const Index = () => {
    return (
        <Switch>
            <Route component={HomePage} exact path={["/", "/homePage"]} />
            <Route component={Aboutus} exact path={["/aboutus"]} />
            <Route component={Contactus} exact path={["/contactus"]} />
            <Route component={MainLayout} exact path={["/mainlayout"]} />``

            <Route component={SignIn} exact path={["/signin"]} />
            <Route component={SignUp} exact path={["/signup"]} />

        </Switch>
    )
}
export default Index;