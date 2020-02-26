import loadable from '@loadable/component';
import React from 'react';

import { OtherServices, WoodRemoval, TreeCare } from './services';
import Loading from './loading';

const fallback = { fallback: <Loading /> };

const LoadableHome = loadable(() => import('./home'), fallback);
const LoadableNoMatch = loadable(() => import('./noMatch'), fallback);
const LoadableOtherServices = loadable(() => OtherServices, fallback);
const LoadableWoodRemoval = loadable(() => WoodRemoval, fallback);
const LoadableTreeCare = loadable(() => TreeCare, fallback);

export {
    LoadableHome,
    LoadableNoMatch,
    LoadableTreeCare,
    LoadableOtherServices,
    LoadableWoodRemoval,
};
