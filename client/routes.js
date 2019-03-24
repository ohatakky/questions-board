import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Board from './components/board';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as colors from '@material-ui/core/colors';

const Routes = () => (
    <Router>
      <div>
        <AppBar position="static" style={{backgroundColor: colors.lightBlue[400]}}>
          <Toolbar>
            <Typography variant="title" style={{color: colors.grey[50]}} component={Link} to="/">
              Questions-Board
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/board/:hash' component={Board} />
        </Switch>
      </div>
    </Router>
  );
  
  export default Routes;