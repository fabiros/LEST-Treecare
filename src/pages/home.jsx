import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function H() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
}
