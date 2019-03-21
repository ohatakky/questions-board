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
    axios.get("https://questions-board.appspot.com/boards/" + location.pathname.split('/')[2])
    .then(response => {
      if (this._isMounted) {
        console.log(response);
        this.setState({ posts: response.data });
      }
    })
    .catch(error => {
      console.log(error);
      this.setState({ errorMessage: error.response.data.message });
    })
  }

  componentDidMount() {
    this._isMounted = true;
    this.reload.bind(this);
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
            {/* <Input url={this.props.match.params.hash}/> */}
            <Input url={"https://questions-board.appspot.com/boards/" + location.pathname.split('/')[2]}/>
            <Posts posts={this.state.posts}/>
          </div>)
        }
      </div>
    );
  }
}

export default Board;