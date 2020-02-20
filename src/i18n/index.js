import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import options from './options';

export default i18next
    .use(detector)
    .use(backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(
        Object.assign(options, {
            saveMissing: true, // send not translated keys to endpoint
            keySeparator: false, // we do not use keys in form messages.welcome
        })
    );
