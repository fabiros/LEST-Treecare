import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';

import Logo from '../../assets/images/logo';

export default function NavigationBar() {
    const { t } = useTranslation();

    return (
        <div style={{ boxShadow: '0px -2px 5px rgba(68, 68, 68, 0.6)' }}>
            <Navbar
                bg="transparent"
                expand="md"
                className="py-0"
                type="dark"
                as={Nav.Item}
            >
                <div className="container">
                    <Navbar.Brand to={t('routes.home')}>
                        <img
                            alt="Logo"
                            src={Logo}
                            height="60"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link
                                to={t('routes.home')}
                                active
                                bsPrefix="nav-link text-dark"
                            >
                                {t('labels.home')}
                            </Nav.Link>
                            <NavDropdown
                                title={t('labels.services')}
                                as={Nav.Link}
                                id="basic-nav-dropdown"
                                bsPrefix="nav-link text-dark"
                            >
                                <NavDropdown.Item to={t('routes.removal')}>
                                    {t('labels.removal')}
                                </NavDropdown.Item>
                                <NavDropdown.Item to={t('routes.treeCare')}>
                                    {t('labels.treeCare')}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    to={t('routes.otherServices')}
                                >
                                    {t('labels.otherServices')}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link
                                to={t('routes.gallery')}
                                bsPrefix="nav-link text-dark"
                            >
                                {t('labels.gallery')}
                            </Nav.Link>
                            <Nav.Link
                                to={t('routes.contact')}
                                bsPrefix="nav-link text-dark"
                            >
                                {t('labels.contact')}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}
