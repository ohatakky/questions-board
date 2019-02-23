import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <h1>Hello, World</h1>
        );
    }
}

render((
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
), document.querySelector('#app'));