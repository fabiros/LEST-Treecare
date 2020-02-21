import React from 'react';
import { Navbar, Container } from '../components';

export default function NoMatch() {
    return (
        <div>
            <Navbar />
            <Container>
                <h3>Error! Page not found</h3>
            </Container>
        </div>
    );
}
