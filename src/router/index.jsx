import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import {
    Home,
    OtherServices,
    WoodRemovalService,
    TreeCareService,
    NoMatch,
} from '../pages';

function LESTRouter({ t }) {
    const routes = [
        {
            path: t('routes.home'),
            component: Home,
        },
        {
            path: t('routes.services'),
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
            </Switch>
        </Router>
    );
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

LESTRouter.propTypes = {
    t: PropTypes.func,
};

export default withTranslation()(LESTRouter);
