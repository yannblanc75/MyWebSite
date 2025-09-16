import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// Import avec console.log pour vérifier que les modules sont correctement chargés
const Accueil = React.lazy(() => {
    console.log("Chargement de Accueil...");
    return import('./pages/Accueil');
});
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));
const APropos = React.lazy(() => import('./pages/APropos'));
const Competences = React.lazy(() => import('./pages/Competences'));
const Debug = React.lazy(() => import('./pages/Debug')); // Ajout de la page de débogage

const AppRoutes = () => {
    console.log("Rendu du composant AppRoutes");
    
    return (
        <React.Suspense fallback={
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
                <div className="loader-spinner"></div>
            </div>
        }>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/apropos" element={<APropos />} />
                <Route path="/competences" element={<Competences />} />
                <Route path="/debug" element={<Debug />} /> {/* Nouvelle route de débogage */}
                {/* Route de secours */}
                <Route path="*" element={
                    <div style={{padding: "2rem"}}>
                        <h1>Page non trouvée</h1>
                        <p>La page que vous cherchez n'existe pas. <a href="/">Retour à l'accueil</a></p>
                    </div>
                } />
            </Routes>
        </React.Suspense>
    );
};

export default AppRoutes;