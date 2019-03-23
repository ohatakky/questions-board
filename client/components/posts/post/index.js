import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Post(props) {
    return (
        <ListItem button>
          <ListItemText primary={props.post.content} />
        </ListItem>
    );
}

export default Post;