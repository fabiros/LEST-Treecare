import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';

import Logo from '../../assets/images/logo';
import Leaf from '../../assets/images/leaf';

export default function NavigationBar() {
    const { t } = useTranslation();

    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">
                    <img
                        alt="Logo"
                        src={Logo}
                        className="d-inline-block align-top"
                    />
                    <img
                        alt="Logo"
                        src={Leaf}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link to="/">{t('labels:home')}</Nav.Link>
                        <NavDropdown
                            title={t('labels:services')}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item to="/services/a">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/services/a2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/services/a3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="/services/a4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="/gallery">{t('labels:gallery')}</Nav.Link>
                        <Nav.Link to="/contact">{t('labels:contact')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
