import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import * as colors from '@material-ui/core/colors';

const board_create = 'https://questions-board.appspot.com/boards';

var create_board = function(callback, t) {
  axios.post(board_create)
    .then(function (response) {
      callback(response, t)
    })
    .catch(function (error) {
      
    })
}

var done = function(response, t) {
  t.props.history.push('board/' + response.data)
}

class Home extends Component {

  handleClick(e) {
    e.preventDefault();

    create_board(done, this);
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center" style={{minHeight: '600px'}}>
        <Button style={{backgroundColor: colors.lightBlue[400], color: colors.grey[50]}} variant="contained" onClick={this.handleClick.bind(this)}>Create</Button>
      </Grid>
    );
  }
}

export default withRouter(Home)