import React, { Component } from 'react';
import Post from './post'

class Posts extends Component {
    render() {
        return (
          <div>
            <Post /><Post /><Post />
          </div>
        );
      }
}

export default Posts;