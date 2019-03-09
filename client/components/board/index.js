import React, { Component } from 'react';
import axios from 'axios';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ""
    };
  }

  componentDidMount() {
    axios.get("http://localhost:1234/boards/" + this.props.match.params.hash)
    .then(response => {
    })
    .catch(error => {
      this.setState({ errorMessage: error.response.data.message });
    })
  }

  render() {
    return (
      <div>
        {this.state.errorMessage.length > 0 ?
          (<h2>{this.state.errorMessage}</h2>) :
          (
            <h2>cuurent access</h2>
            // <Input />
            // <Posts />
          )}
      </div>
    );
  }
}

export default Board;