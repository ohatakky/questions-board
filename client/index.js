import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Routes />
  </React.Fragment>,
  document.getElementById('app')
);
