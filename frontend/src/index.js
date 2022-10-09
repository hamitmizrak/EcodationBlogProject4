import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

//router 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/Header';
import Footer from './components/Footer';

import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeView from './components/EmployeeView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <Router>
        <Header />

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

    </React.Fragment>

    {/*
     <>
      <App />
    </> 
    */}
  </React.StrictMode>
);


reportWebVitals();
