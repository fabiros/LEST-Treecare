import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Home } from './pages';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Home />;
    }
}

export default hot(App);
