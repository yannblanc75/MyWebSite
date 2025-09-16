import React, { useState } from 'react';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    
    const toggleDarkMode = () => {
        setIsDark(!isDark);
        // Juste un effet visuel, l'implémentation complète
        // nécessiterait plus de code
        alert('Cette fonctionnalité sera bientôt disponible!');
    };
    
    return (
        <div 
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            title="Changer de thème"
        >
            {isDark ? '☀️' : '🌙'}
        </div>
    );
};

export default DarkModeToggle;