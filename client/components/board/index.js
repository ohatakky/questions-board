import React, { Component } from 'react';
import axios from 'axios';
import InputPost from '../input'
import Posts from '../posts'
import Typography from '@material-ui/core/Typography';

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
      if(error.response.status == 400){
        this.setState({ errorMessage: "URLが正しくありません。" });
      }
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
        ? (<Typography variant="subheading" style={{padding: "8px"}}>{this.state.errorMessage}</Typography>)
        : (<div>
            <InputPost url={"https://questions-board.appspot.com/boards/" + location.pathname.split('/')[2]} inputPosts={this.inputPosts.bind(this)}/>
            <Posts posts={this.state.posts}/>
          </div>)
        }
      </div>
    );
  }
}

export default Board;