import React from 'react';
import HomePage from '../Views/Home';
import Dashboard from '../Views/Dashboard';
import SignIn from '../Views/SignIn';
import SignUp from '../Views/SignUp';
import Report from '../Views/ReportView'
import Transactions from '../Views/TransactionView';
import { Route, Switch } from 'react-router-dom';


const Index = () => {
    return (
        <switch>
            <Route component={HomePage} exact path={["/", "/home"]} />
            <Route component={Dashboard} exact path={"/dashboard"} />

            <Route component={SignIn} exact path={["/signin"]} />
            <Route component={SignUp} exact path={["/signup"]} />
            <Route component={Report} exact path={["/report"]} />
            <Route component={Transactions} exact path={["/transaction"]} />

        </switch>
    )
}
export default Index;