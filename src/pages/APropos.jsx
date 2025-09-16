import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const APropos = () => {
    const [ref, isVisible] = useScrollAnimation();
    
    return (
        <div className="container">
            <div 
                ref={ref}
                className={`cv-container fade-in-section ${isVisible ? 'is-visible' : ''}`}
            >
                <h1>Mon CV</h1>
                <p>Vous pouvez consulter mon CV complet ici pour en savoir plus sur mon parcours et mes compétences.</p>
                <a 
                    href={`${import.meta.env.BASE_URL}yann_blanc_cv_asi.pdf`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cv-download"
                >
                    Télécharger mon CV
                </a>
            </div>
        </div>
    );
};

export default APropos;