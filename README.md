# Site Personnel de Yann Blanc

Ce projet est un site web personnel développé avec React et Vite. Il est structuré en plusieurs pages pour présenter le portfolio, les informations de contact, et une section à propos.

## Structure du projet

Le projet est organisé comme suit :

```
site-personnel
├── public
│   └── favicon.svg          # Icône du site web
├── src
│   ├── assets
│   │   └── styles
│   │       └── global.css   # Styles globaux
│   ├── components
│   │   ├── Header.jsx       # Composant d'en-tête
│   │   ├── Footer.jsx       # Composant de pied de page
│   │   ├── Navigation.jsx    # Composant de navigation
│   │   └── Layout.jsx       # Composant de mise en page
│   ├── pages
│   │   ├── Accueil.jsx      # Page d'accueil
│   │   ├── Portfolio.jsx    # Page de portfolio
│   │   ├── Contact.jsx      # Page de contact
│   │   └── APropos.jsx      # Page à propos
│   ├── hooks
│   │   └── useMediaQuery.js # Hook personnalisé pour les requêtes médias
│   ├── utils
│   │   └── helpers.js       # Fonctions utilitaires
│   ├── App.jsx              # Point d'entrée de l'application
│   ├── main.jsx             # Point d'entrée principal
│   └── routes.jsx           # Définition des routes
├── .eslintrc.cjs            # Configuration ESLint
├── .gitignore               # Fichiers à ignorer par Git
├── index.html               # Fichier HTML principal
├── package.json             # Configuration npm
└── vite.config.js           # Configuration Vite
```

## Installation

Pour installer le projet, suivez ces étapes :

1. Clonez le dépôt :
   ```
   git clone <URL_DU_DEPOT>
   ```
2. Accédez au répertoire du projet :
   ```
   cd site-personnel
   ```
3. Installez les dépendances :
   ```
   npm install
   ```

## Démarrage

Pour démarrer le serveur de développement, exécutez la commande suivante :
```
npm run dev
```
Ouvrez votre navigateur à l'adresse `http://localhost:3000` pour voir le site en action.

## Déploiement

Pour déployer le site, construisez le projet avec :
```
npm run build
```
Les fichiers de production seront générés dans le dossier `dist`.

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à soumettre des pull requests pour améliorer le projet.

## Acknowledgements

Merci à tous ceux qui ont contribué à ce projet.