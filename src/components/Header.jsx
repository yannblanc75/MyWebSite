import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Yann Blanc</h1>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;