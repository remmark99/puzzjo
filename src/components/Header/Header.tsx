import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import './Header.css';

const Header: React.FC = () => {
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

export default Header;
