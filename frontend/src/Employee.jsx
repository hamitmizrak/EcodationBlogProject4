import React, { Component } from 'react';

//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//Component
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeList from './components/employee/EmployeeList';
import EmployeeCreate from './components/employee/EmployeeCreate';
import EmployeeView from './components/employee/EmployeeView';

//Class
export default class Employee extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Header otherprops="Employee.jsx gelen veri" />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={EmployeeList}></Route>
                            <Route path="/employees" component={EmployeeList}></Route>
                            <Route path="/employee-add/:id" component={EmployeeCreate}></Route>
                            <Route path="/employee-view/:id" component={EmployeeView}></Route>
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </React.Fragment> // end React.Fragment
        ); // end return
    }// end render
}//class Employee

