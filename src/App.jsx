import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './routes';

const App = () => {
  // Débogage console
  useEffect(() => {
    console.log("App mounted");
    console.log("BASE_URL:", import.meta.env.BASE_URL);
    console.log("MODE:", import.meta.env.MODE);
    console.log("Window location:", window.location.href);
    
    // Vérifiez si les ressources sont accessibles
    fetch(`${import.meta.env.BASE_URL}img/profil.jpg`)
      .then(response => {
        console.log("Image profil accessible:", response.ok);
      })
      .catch(error => {
        console.error("Erreur accès image:", error);
      });
  }, []);

  return (
    <HashRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </HashRouter>
  );
};

export default App;