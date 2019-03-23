import React, { Component } from 'react';

function Post(props) {
    return (
        <p>{props.post.content}</p>
    );
}

export default Post;