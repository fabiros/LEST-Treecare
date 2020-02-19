import { de, en } from './languages';

export default {
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: 'de',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: en,
        },
        de: {
            translation: de,
        },
    },
};
