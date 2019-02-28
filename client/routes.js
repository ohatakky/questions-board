import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home'
import Admin from './components/admin'
import Board from './components/board'

const Routes = () => (
    <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/admin/create' component={Admin} /> */}
            <Route path='/admin' component={Admin} />
            <Route path='/boards/:hash' component={Board} />
            <Route path='/boards' component={Board} />
          </Switch>
        </div>
    </Router>
  );
  
  export default Routes;