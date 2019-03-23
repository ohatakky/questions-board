import React, { Component } from 'react';
import Post from './post'

function Posts(props) {
    const posts = props.posts.map((post) =>
        <Post post={post} key={post.id} />
    );

    const rev_posts = posts.slice().reverse();

    return (
        <div>
            {rev_posts}
        </div>
    );
}

export default Posts;