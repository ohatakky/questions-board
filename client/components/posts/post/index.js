import React, { Component } from 'react';

function Post(props) {
    console.log(props)
    return (
        <p>{props.post.board.id}</p>
    );
}

export default Post;