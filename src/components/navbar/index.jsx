import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo';

export default function NavigationBar({ location: { pathname } }) {
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
                    <Navbar.Brand to={t('routes.home')} as={Link}>
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
                                active={pathname === t('routes.home')}
                                as={Link}
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
                                <NavDropdown.Item
                                    to={t('routes.removal')}
                                    as={Link}
                                >
                                    {t('labels.removal')}
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={Link}
                                    to={t('routes.treeCare')}
                                >
                                    {t('labels.treeCare')}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    as={Link}
                                    to={t('routes.otherServices')}
                                >
                                    {t('labels.otherServices')}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link
                                as={Link}
                                to={t('routes.gallery')}
                                active={pathname === t('routes.gallery')}
                                bsPrefix="nav-link text-dark"
                            >
                                {t('labels.gallery')}
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to={t('routes.contact')}
                                active={pathname === t('routes.contact')}
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

NavigationBar.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};
