import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/global.css';

// Enregistrer le service worker uniquement en production
// et gérer correctement les chemins pour différents environnements
if ('serviceWorker' in navigator && import.meta.env.MODE === 'production') {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}service-worker.js`;
    console.log("Tentative d'enregistrement du service worker depuis:", swUrl);
    
    navigator.serviceWorker.register(swUrl)
      .then(registration => {
        console.log('Service Worker enregistré avec succès:', registration);
        
        // Vérifier les mises à jour à intervalles réguliers
        setInterval(() => {
          registration.update();
        }, 1000 * 60 * 60); // Vérifier toutes les heures
      })
      .catch(error => {
        console.error("Échec de l'enregistrement du Service Worker:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);