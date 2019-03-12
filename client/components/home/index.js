import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

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
  t.props.history.push('boards/' + response.data)
}

class Home extends Component {

  handleClick(e) {
    e.preventDefault();

    create_board(done, this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Create</button>
      </div>
    );
  }
}

export default withRouter(Home)