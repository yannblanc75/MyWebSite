import React, { useEffect, useState } from 'react';

const DebugVisibility = () => {
    const [issues, setIssues] = useState([]);
    
    useEffect(() => {
        const checkVisibility = () => {
            const sections = [
                { selector: '.hero-section', name: 'Section Hero' },
                { selector: '.intro-section', name: 'Section Introduction' },
                { selector: '.services-section', name: 'Section Services' },
                { selector: '.cta-section', name: 'Section CTA' }
            ];
            
            const foundIssues = [];
            
            sections.forEach(section => {
                const element = document.querySelector(section.selector);
                if (element) {
                    const style = window.getComputedStyle(element);
                    const isVisible = style.opacity > 0.5;
                    if (!isVisible) {
                        foundIssues.push(`${section.name} n'est pas visible (opacity: ${style.opacity})`);
                    }
                } else {
                    foundIssues.push(`${section.name} n'existe pas dans le DOM`);
                }
            });
            
            setIssues(foundIssues);
            
            // Si des problèmes sont détectés, forcer l'affichage
            if (foundIssues.length > 0) {
                sections.forEach(section => {
                    const element = document.querySelector(section.selector);
                    if (element) {
                        element.classList.add('is-visible');
                    }
                });
            }
        };
        
        // Vérifier après le chargement initial puis à intervalles réguliers
        setTimeout(checkVisibility, 1000);
        const interval = setInterval(checkVisibility, 3000);
        
        return () => clearInterval(interval);
    }, []);
    
    if (issues.length === 0) return null;
    
    return (
        <div style={{
            position: 'fixed',
            bottom: '70px',
            right: '20px',
            backgroundColor: 'rgba(255, 0, 0, 0.8)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 9999,
            maxWidth: '300px'
        }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Problèmes d'affichage :</h4>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                ))}
            </ul>
        </div>
    );
};

export default DebugVisibility;