import React from 'react';
import HomePage from '../Components/HomePage';
import Aboutus from '../Components/aboutus';
import Contactus from '../Components/Contactus';
import MainLayout from '../Views/Home';
import SignIn from '../Views/SignIn';
import SignUp from '../Views/SignUp';
import Report from '../Views/ReportView'
import { Route, Switch } from 'react-router-dom';


const Index = () => {
    return (
        <switch>
            <Route component={HomePage} exact path={["/", "/homePage"]} />
            <Route component={Aboutus} exact path={["/", "/aboutus"]} />
            <Route component={Contactus} exact path={["/", "/contactus"]} />
            <Route component={MainLayout} exact path={["/mainlayout"]} />``

            <Route component={SignIn} exact path={["/signin"]} />
            <Route component={SignUp} exact path={["/signup"]} />
            <Route component={Report} exact path={["/report"]} />

        </switch>
    )
}
export default Index;