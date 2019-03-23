import React, { Component } from 'react';
import Post from './post';
import List from '@material-ui/core/List';

function Posts(props) {
    const posts = props.posts.map((post) =>
        <Post post={post} key={post.id} />
    );

    const rev_posts = posts.slice().reverse();

    return (
        <List>
            {rev_posts}
        </List>
    );
}

export default Posts;