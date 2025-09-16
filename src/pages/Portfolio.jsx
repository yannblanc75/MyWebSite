import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Infrastructure Active Directory',
            description: 'Mise en place d\'une infrastructure Active Directory complète incluant la configuration de GPO, UO et l\'audit de sécurité.',
            icon: '🔐'
        },
        {
            title: 'Site vitrine SIGNS / IRSEA',
            description: 'Développement d\'un site vitrine pour SIGNS / IRSEA avec une interface utilisateur moderne et responsive.',
            icon: '🌐'
        },
        {
            title: 'Mentorat informatique et cybersécurité',
            description: 'Animation de sessions de mentorat en informatique et cybersécurité pour accompagner des étudiants dans leur parcours professionnel.',
            icon: '👨‍🏫'
        },
    ];

    return (
        <div className="container">
            <h1>Mes Projets</h1>
            <p className="subtitle">Découvrez les projets sur lesquels j'ai travaillé</p>
            
            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <div className="project-icon">{project.icon}</div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;