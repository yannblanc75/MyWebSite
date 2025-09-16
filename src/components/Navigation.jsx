import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const location = useLocation();
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };
    
    return (
        <nav>
            {isMobile && (
                <div 
                    className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu navigation"
                    role="button"
                    tabIndex={0}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
            
            <ul className={`nav-links ${isMobile ? (isMenuOpen ? 'open' : 'closed') : ''}`}>
                <li>
                    <Link 
                        to="/" 
                        className={location.pathname === '/' ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/competences" 
                        className={location.pathname === '/competences' ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        Compétences
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/portfolio" 
                        className={location.pathname === '/portfolio' ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        Projets
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/apropos" 
                        className={location.pathname === '/apropos' ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        CV
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className={location.pathname === '/contact' ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;