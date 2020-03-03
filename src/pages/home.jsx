import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import PropTypes from 'prop-types';

import Icon from '../components/icon';
import RemovalImg from '../assets/images/removal';
import TreeCareImg from '../assets/images/treeCare';
import OtherServicesImg from '../assets/images/otherServices';

function Contact() {
    const { t } = useTranslation();

    return (
        <div>
            <Link to={t('routes.contact')}>{t('labels.contact')}</Link>
        </div>
    );
}

function Services() {
    const { t } = useTranslation();

    // TODO: SHORTER TEXT
    return (
        <div>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={RemovalImg} />
                    <Card.Body>
                        <Card.Title>{t('labels.removal')}</Card.Title>
                        <Card.Text>{t('texts.removal')}</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={TreeCareImg} />
                    <Card.Body>
                        <Card.Title>{t('labels.treeCare')}</Card.Title>
                        <Card.Text>{t('texts.treeCare')}</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={OtherServicesImg} />
                    <Card.Body>
                        <Card.Title>{t('labels.otherServices')}</Card.Title>
                        <Card.Text>{t('texts.otherServices')}</Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
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
                <Services />
            </section>
            <section>{pathname === t('routes.contact') && <Contact />}</section>
            <section>
                {pathname === t('routes.services') && <Services />}
            </section>
        </content>
    );
}

Home.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};
