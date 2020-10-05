import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContext } from './components/UserContext';

//import route components
import Landing from './components/landing/Landing';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import Dashboard from './components/customer/Dashboard';

//import base components
import Navbar from './components/base/Navbar';

//import css
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />

      <UserContext.Provider value="hi">
        <Route exact path="/" component={Landing} />
        <Route exact path="/user/register" component={Register} />
        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/dashboard" component={Dashboard} />
      </UserContext.Provider>
    </Fragment>
  </Router>
);

export default App;
