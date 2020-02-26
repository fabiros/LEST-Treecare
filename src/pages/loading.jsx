import React from 'react';
import { withTranslation } from 'react-i18next';

import { Navbar, Container } from '../components';

function Loading() {
    return (
        <div>
            <Navbar />
            <Container>
                <p>Loading ...</p>
            </Container>
        </div>
    );
}

export default withTranslation()(Loading);
