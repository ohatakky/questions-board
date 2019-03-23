import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as colors from '@material-ui/core/colors';

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

class InputPost extends Component {
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
          <form onSubmit={this.handleSubmit} style={{padding: "20px"}}>
            <TextField
              label="Input"
              defaultValue="Input"
              inputProps={{
                'aria-label': 'Description',
              }}
              onChange={this.handleChange}
              value={this.state.value}
              type="text"
              variant="outlined"
              style={{minHeight: "32px", minWidth: "200px", padding: "4px", marginRight: "20px"}}
            />
            <Button
              type="submit"
              style={{backgroundColor: colors.red[200], color: colors.grey[50], minHeight: "32px", minWidth: "100px"}}
              variant="contained">
              Submit
            </Button>
        </form>
      );
    }
}

export default InputPost;