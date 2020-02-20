import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Container } from '../components';

export default function Home() {
    return (
        <Router>
            <div>
                <Navbar />
                <Container>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </Container>
            </div>
        </Router>
    );
}
