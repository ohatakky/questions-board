import React, { Component } from 'react';

const board_create = 'http://localhost:1234/boards';

class Home extends Component {
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    // TODO : ボタン押されたら状態変化。かつAPIを呼ぶ
    
    // TODO : APIの返り値(url)のURL → /boards/:hashに遷移する。
  }

  render() {
    return (
      <h1 onClick={this.handleClick}>Create</h1>
    );
  }
}

export default Home;