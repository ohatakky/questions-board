import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // TODO : postしたタイミングでpostした自信の画面には表示する
    axios.post("https://questions-board.appspot.com/boards/" + this.props.url, null, {params: {
      content: this.state.value
    }})
    .then(function (response) {
      console.log("postPost")
    })
    .catch(function (error) {
      
    })
    event.preventDefault();
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          input:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
    }
}

export default Input;