import React from 'react';
import { useLocation } from 'react-router-dom';

// Composant conservé en cas de besoin de débogage futur, mais optimisé
const Debug = () => {
    const location = useLocation();
    
    const styles = {
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        zIndex: 9999
    };
    
    return (
        <div style={styles}>
            <div><strong>Path:</strong> {location.pathname}</div>
            <div><strong>Base URL:</strong> {import.meta.env.BASE_URL}</div>
        </div>
    );
};

export default Debug;