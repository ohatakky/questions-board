import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

const board_create = 'http://localhost:1234/boards';

class Home extends Component {
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    axios.post(board_create).catch(function (error) {
      if (error.response) {
        console.log(error.response)
      }
    });

    // TODO : postのreturn(url)を受け取ってredirectさせる。

    this.props.history.push('/boards/aaaaaa')
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