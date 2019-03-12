import React, { Component } from 'react';

function Post(props) {
    console.log("post content")
    return (
        <p>{props.post.content}</p>
    );
}

export default Post;