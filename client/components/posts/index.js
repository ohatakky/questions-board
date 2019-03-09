import React, { Component } from 'react';
import Post from './post'

function Posts(props) {
    
    const posts = props.posts.map((post) =>
        <Post post={post} key={post.id} />
    );

    return (
        <div>
            {posts}
        </div>
    );
}

export default Posts;