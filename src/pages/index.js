import universal from 'react-universal-component';
import Loading from './loading';

const Home = universal(() => import('./home.jsx'), Loading);
const OtherServices = universal(() => import('./services/others.jsx'), Loading);
const WoodRemovalService = universal(
    () => import('./services/removal.jsx'),
    Loading
);
const TreeCareService = universal(
    () => import('./services/treeCare.jsx'),
    Loading
);
const NoMatch = universal(() => import('./noMatch.jsx'), Loading);

export {
    Home,
    OtherServices,
    WoodRemovalService,
    TreeCareService,
    NoMatch,
    Loading,
};
