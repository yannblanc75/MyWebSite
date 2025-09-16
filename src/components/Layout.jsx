import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import DarkModeToggle from './DarkModeToggle';

// Composant interne pour le débogage
const DevTools = () => {
  const location = useLocation();
  const [info, setInfo] = useState({
    baseUrl: import.meta.env.BASE_URL,
    mode: import.meta.env.MODE
  });
  
  const style = {
    position: 'fixed',
    bottom: '80px',
    left: '10px',
    background: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '12px',
    zIndex: 9999,
    maxWidth: '300px'
  };
  
  return (
    <div style={style}>
      <div><strong>Path:</strong> {location.pathname}</div>
      <div><strong>Hash:</strong> {location.hash}</div>
      <div><strong>Base URL:</strong> {info.baseUrl}</div>
      <div><strong>Mode:</strong> {info.mode}</div>
    </div>
  );
};

const Layout = ({ children }) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const isDev = import.meta.env.MODE === 'development';
    
    // Effet d'animation pour les pages avec un délai pour l'animation de chargement
    useEffect(() => {
        // Log pour le débogage
        console.log("Changement de route:", location.pathname);
        
        window.scrollTo(0, 0);
        setIsLoading(true);
        
        // Simuler un temps de chargement minimal pour l'animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);
        
        return () => clearTimeout(timer);
    }, [location.pathname, location.hash]);

    return (
        <div className="site-wrapper">
            <Header />
            <main className="main-content">
                {isLoading ? (
                    <div className="page-loader">
                        <div className="loader-spinner"></div>
                    </div>
                ) : (
                    children || (
                        <div style={{padding: '2rem', textAlign: 'center'}}>
                            <h2>Contenu non disponible</h2>
                            <p>Le contenu de cette page n'a pas pu être chargé. Veuillez vérifier la console ou retourner à l'accueil.</p>
                        </div>
                    )
                )}
            </main>
            <Footer />
            <DarkModeToggle />
            {isDev && <DevTools />}
        </div>
    );
};

export default Layout;