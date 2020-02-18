import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { Home } from './pages';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    path="/:url*"
                    exact
                    strict
                    render={props => (
                        <Redirect to={`${props.location.pathname}/`} />
                    )}
                />
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

export default hot(App);
