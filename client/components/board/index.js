import React, { Component } from 'react';

class Board extends Component {
  render() {
    const hash = this.props.match.params.hash
    return (
      <h1>Boards {hash}</h1>
    );
  }
}

export default Board;