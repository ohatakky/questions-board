import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

const board_create = 'http://localhost:1234/boards';

var create_board = function(callback, t) {
  axios.post(board_create)
    .then(function (response) {
      // handle success
      callback(response, t)
    })
    .catch(function (error) {
      
    })
}

var done = function(response, t) {
  // console.log(response)
  t.props.history.push(response.data)
}

class Home extends Component {

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');

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