import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

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

function Services() {
    // const { t } = useTranslation();

    return (
        <div>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>
                            Card title that wraps to a new line
                        </Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in{' '}
                                <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural
                            lead-in to additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in{' '}
                                <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural
                            lead-in to additional content.{' '}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src="holder.js/100px160" />
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in{' '}
                                <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This card has
                            even longer content than the first to show that
                            equal height action.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Text>
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
