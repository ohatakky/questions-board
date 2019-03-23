import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home'
import Board from './components/board'

const Routes = () => (
    <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/board/:hash' component={Board} />
          </Switch>
    </Router>
  );
  
  export default Routes;