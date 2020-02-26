import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import {
    Home,
    OtherServices,
    WoodRemovalService,
    TreeCareService,
    NoMatch,
} from '../pages';
import { Navbar, Container } from '../components';

function LESTRouter({ t }) {
    const routes = [
        {
            path: t('routes.home'),
            component: Home,
            exact: true,
        },
        {
            path: t('routes.services'),
            exact: true,
            routes: [
                {
                    path: t('routes.otherServices'),
                    component: OtherServices,
                },
                {
                    path: t('routes.removal'),
                    component: WoodRemovalService,
                },
                {
                    path: t('routes.treeCare'),
                    component: TreeCareService,
                },
            ],
        },
        {
            path: '*',
            component: NoMatch,
        },
    ];

    return (
        <Router>
            <Switch>
                {routes.map(route => {
                    return <RouteWithSubRoutes key={route.path} {...route} />;
                })}
                <Redirect exact from="/home" to={t('routes.home')} />
            </Switch>
        </Router>
    );
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => {
                // pass the sub-routes down to keep nesting
                return (
                    <div>
                        <Navbar {...props} />
                        <Container>
                            <route.component {...props} routes={route.routes} />
                        </Container>
                    </div>
                );
            }}
        />
    );
}

LESTRouter.propTypes = {
    t: PropTypes.func,
};

export default withTranslation()(LESTRouter);
