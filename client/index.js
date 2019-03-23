import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as colors from '@material-ui/core/colors';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <AppBar position="static" style={{backgroundColor: colors.lightBlue[400]}}>
      <Toolbar>
        <Typography variant="title" style={{color: colors.grey[50]}}>
          Questions-Board
        </Typography>
      </Toolbar>
    </AppBar>
    <Routes />
  </React.Fragment>,
  document.getElementById('app')
);
