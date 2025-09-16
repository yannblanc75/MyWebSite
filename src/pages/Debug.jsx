import React, { useState, useEffect } from 'react';

const Debug = () => {
  const [info, setInfo] = useState({
    loading: true,
    errors: [],
    environment: {}
  });

  useEffect(() => {
    // Collecter des informations sur l'environnement
    const env = {
      baseUrl: import.meta.env.BASE_URL,
      mode: import.meta.env.MODE,
      hostname: window.location.hostname,
      pathname: window.location.pathname,
      port: window.location.port,
      hash: window.location.hash,
      userAgent: navigator.userAgent,
      serviceWorker: 'serviceWorker' in navigator,
      timestamp: new Date().toISOString()
    };

    // Vérifier les ressources chargées
    const checkResources = async () => {
      const errors = [];
      
      // Vérifier l'image de profil
      try {
        const profileImg = new Image();
        profileImg.src = `${import.meta.env.BASE_URL}img/profil.jpg`;
        
        await new Promise((resolve, reject) => {
          profileImg.onload = resolve;
          profileImg.onerror = () => reject(new Error("Impossible de charger l'image de profil"));
          // Timeout après 3 secondes
          setTimeout(() => reject(new Error("Timeout du chargement de l'image")), 3000);
        });
      } catch (e) {
        errors.push(`Erreur image: ${e.message}`);
      }
      
      // Vérifier le CV
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}yann_blanc_cv_asi.pdf`, { method: 'HEAD' });
        if (!response.ok) {
          errors.push(`Erreur CV: statut ${response.status}`);
        }
      } catch (e) {
        errors.push(`Erreur CV: ${e.message}`);
      }
      
      setInfo({
        loading: false,
        errors,
        environment: env
      });
    };
    
    checkResources();
  }, []);

  if (info.loading) {
    return (
      <div className="container" style={{padding: '2rem'}}>
        <h1>Diagnostic en cours...</h1>
        <div className="loader-spinner" style={{margin: '2rem auto'}}></div>
      </div>
    );
  }

  return (
    <div className="container" style={{padding: '2rem'}}>
      <h1>Page de diagnostic</h1>
      
      <section style={{marginBottom: '2rem'}}>
        <h2>Statut</h2>
        {info.errors.length === 0 ? (
          <div style={{padding: '1rem', backgroundColor: '#e6ffe6', borderRadius: '5px'}}>
            ✅ Tout fonctionne correctement
          </div>
        ) : (
          <div style={{padding: '1rem', backgroundColor: '#ffe6e6', borderRadius: '5px'}}>
            ❌ {info.errors.length} problème(s) détecté(s)
            <ul>
              {info.errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
      
      <section style={{marginBottom: '2rem'}}>
        <h2>Environnement</h2>
        <pre style={{
          backgroundColor: '#f4f4f4', 
          padding: '1rem', 
          borderRadius: '5px',
          overflow: 'auto'
        }}>
          {JSON.stringify(info.environment, null, 2)}
        </pre>
      </section>
      
      <section>
        <h2>Actions</h2>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <button 
            onClick={() => window.location.reload()} 
            style={{padding: '0.5rem 1rem', borderRadius: '5px'}}
          >
            Recharger la page
          </button>
          <button 
            onClick={() => window.location.href = '/'} 
            style={{padding: '0.5rem 1rem', borderRadius: '5px'}}
          >
            Aller à l'accueil
          </button>
          <button 
            onClick={() => {
              if ('caches' in window) {
                caches.keys().then(names => {
                  names.forEach(name => {
                    caches.delete(name);
                    alert(`Cache ${name} vidé`);
                  });
                });
              } else {
                alert("L'API Cache n'est pas disponible");
              }
            }} 
            style={{padding: '0.5rem 1rem', borderRadius: '5px'}}
          >
            Vider le cache
          </button>
          <button 
            onClick={() => {
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                  registrations.forEach(registration => {
                    registration.unregister();
                    alert('Service Worker désenregistré');
                  });
                });
              } else {
                alert("Les Service Workers ne sont pas disponibles");
              }
            }} 
            style={{padding: '0.5rem 1rem', borderRadius: '5px'}}
          >
            Désactiver SW
          </button>
        </div>
      </section>
    </div>
  );
};

export default Debug;