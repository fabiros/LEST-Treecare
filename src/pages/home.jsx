import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import PropTypes from 'prop-types';

import Icon from '../components/icon';

function Contact() {
    const { t } = useTranslation();

    return (
        <div>
            <Link to={t('routes.contact')}>{t('labels.contact')}</Link>
        </div>
    );
}

export default function Home({ location: { pathname } }) {
    const { t } = useTranslation();

    return (
        <content>
            <section className="row align-items-center mt-5">
                <h3 style={{ fontFamily: 'Roboto' }}>{t('texts.model')}</h3>
                <ButtonToolbar className="mt-3">
                    <Button variant="primary">
                        <span>{t('labels.readMore')} </span>
                        <Icon name="caret-down" />
                    </Button>
                    <Button className="ml-2" variant="outline-primary">
                        Primary
                    </Button>
                </ButtonToolbar>
            </section>
            <section>{pathname === t('routes.contact') && Contact}</section>
        </content>
    );
}

Home.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};
