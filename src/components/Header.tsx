import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Button from './Button';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header-container container">
                <div className="header">
                    <Logo />
                    <Navigation />
                    <div className="login-buttons">
                        <Button>Sign Up</Button>
                        <Button>Login</Button>
                    </div>
                </div>
            </header>
        )
    }
}