import React, { Component } from 'react';
import axios from 'axios';


var callback_input = function(response, t) {
  t.props.inputPosts(response.data);
}

var post_input = function(callback, t) {
  axios.post(t.props.url, null, {params: {
    content: t.state.value
  }})
  .then(function (response) {
    callback(response, t);
  })
  .catch(function (error) {
  })
}

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
    event.preventDefault();

    post_input(callback_input, this);
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