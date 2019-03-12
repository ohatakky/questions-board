import React, { Component } from 'react';
import axios from 'axios';
import Input from '../input'
import Posts from '../posts'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMessage: "",
    };
    this._isMounted = false;
  }

  reload() {
    // TODO : 直接URL叩いたときにhash取れていない
    axios.get("https://questions-board.appspot.com/boards/" + this.props.match.params.hash)
    .then(response => {
      if (this._isMounted) {
        this.setState({ posts: response.data });
      }
    })
    .catch(error => {
      this.setState({ errorMessage: error.response.data.message });
    })
  }

  componentDidMount() {
    this._isMounted = true;
    setInterval(this.reload.bind(this), 6000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        {this.state.errorMessage.length > 0
        ? (<h2>{this.state.errorMessage}</h2>)
        : (<div>
            <Input url={this.props.match.params.hash}/>
            <Posts posts={this.state.posts}/>
          </div>)
        }
      </div>
    );
  }
}

export default Board;