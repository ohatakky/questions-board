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

  inputPosts(input_posts) {
    this.setState({ posts: input_posts });
  }

  reload() {
    axios.get("https://questions-board.appspot.com/boards/" + location.pathname.split('/')[2])
    .then(response => {
      if (this._isMounted) {
        this.setState({ posts: response.data });
      }
    })
    .catch(error => {
      this.setState({ errorMessage: error.response.data.message });
    })
  }
  componentWillMount() {
    this._isMounted = true;
    this.reload();
  }

  componentDidMount() {
    this._isMounted = true;
    setInterval(this.reload.bind(this), 6000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // Reactがrenderするのは以下の2つのタイミングだけ
  // stateを更新する
  // 外部からpropsを受け取る
  render() {
    return (
      <div>
        {this.state.errorMessage.length > 0
        ? (<h2>{this.state.errorMessage}</h2>)
        : (<div>
            {/* <Input url={this.props.match.params.hash}/> */}
            <Input url={"https://questions-board.appspot.com/boards/" + location.pathname.split('/')[2]} inputPosts={this.inputPosts.bind(this)}/>
            <Posts posts={this.state.posts}/>
          </div>)
        }
      </div>
    );
  }
}

export default Board;