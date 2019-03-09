import React, { Component } from 'react';
import axios from 'axios';
import Input from '../input'
import Posts from '../posts'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMessage: ""
    };
  }

  reload() {
    axios.get("http://localhost:1234/boards/" + this.props.match.params.hash)
    .then(response => {
      this.setState({ posts: response.data });
    })
    .catch(error => {
      this.setState({ errorMessage: error.response.data.message });
    })
  }

  componentDidMount() {
    setInterval(this.reload.bind(this), 3000);
  }

  render() {
    return (
      <div>
        {this.state.errorMessage.length > 0
        ? (<h2>{this.state.errorMessage}</h2>)
        : (<div>
            <Input />
            <Posts posts={this.state.posts}/>
          </div>)
        }
      </div>
    );
  }
}

export default Board;