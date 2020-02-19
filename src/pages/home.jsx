import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar } from '../components';

export default function Home() {
    return (
        <Router>
            <div>
                <Navbar />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
}
