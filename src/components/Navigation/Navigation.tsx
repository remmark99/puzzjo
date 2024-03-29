import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul className="navigation">
                <li>Home</li>
                <li>How it Works</li>
                <li>Employers</li>
                <li>Candidates</li>
                <li>News</li>
                <li>Pages</li>
            </ul>
        </nav>
    )
}

export default Navigation;