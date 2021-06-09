import React from 'react';
import HomePage from '../Views/Home';
import Dashboard from '../Views/Dashboard';
import SignIn from '../Views/SignIn';
import SignUp from '../Views/SignUp';
<<<<<<< HEAD
import Report from '../Views/ReportView';
import Budget from '../Views/BudgetView';
=======
import Report from '../Views/ReportView'
import Transactions from '../Views/TransactionView';
>>>>>>> 10f1ac755f1e62ddc64ab221c18bc40607160a8e
import { Route, Switch } from 'react-router-dom';


const Index = () => {
    return (
        <switch>
            <Route component={HomePage} exact path={["/", "/home"]} />
            <Route component={Dashboard} exact path={"/dashboard"} />

            <Route component={SignIn} exact path={["/signin"]} />
            <Route component={SignUp} exact path={["/signup"]} />
            <Route component={Report} exact path={["/report"]} />
<<<<<<< HEAD
            <Route component={Budget} exact path={["/budget"]} />
=======
            <Route component={Transactions} exact path={["/transaction"]} />
>>>>>>> 10f1ac755f1e62ddc64ab221c18bc40607160a8e

        </switch>
    )
}
export default Index;