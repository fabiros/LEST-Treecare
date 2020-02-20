import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export default function NavigationBar({ defaultActiveKey }) {
    const { t } = useTranslation();

    return (
        <Navbar bg="light" expand="lg" defaultActiveKey={defaultActiveKey}>
            <Navbar.Brand href="#home">{t('forest')}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
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
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

NavigationBar.propTypes = {
    defaultActiveKey: PropTypes.string,
};
