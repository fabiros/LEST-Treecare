import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <div>
            <Link to={t('routes.contact')}>{t('labels.contact')}</Link>
        </div>
    );
}

export default function Home() {
    // const { t } = useTranslation();

    return (
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/contact" component={Contact}>
                    Home
                </Link>
            </li>
        </ul>
    );
}
