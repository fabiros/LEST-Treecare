import universal from 'react-universal-component';
import Loading from './loading';

const Home = universal(() => import('./home.jsx'));
const OtherServices = universal(() => import('./services/others.jsx'));
const WoodRemovalService = universal(() => import('./services/removal.jsx'));
const TreeCareService = universal(() => import('./services/treeCare.jsx'));
const NoMatch = universal(() => import('./noMatch.jsx'));

export {
    Home,
    OtherServices,
    WoodRemovalService,
    TreeCareService,
    NoMatch,
    Loading,
};
