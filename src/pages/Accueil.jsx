import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Accueil = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.1);
    const [introRef, introVisible] = useScrollAnimation(0.1);
    const [servicesRef, servicesVisible] = useScrollAnimation(0.1);
    const [ctaRef, ctaVisible] = useScrollAnimation(0.1);
    
    // État qui force l'affichage après un certain temps si les animations ne se déclenchent pas
    const [forceVisible, setForceVisible] = useState(false);

    useEffect(() => {
        // Préchargement de l'image
        const img = new Image();
        img.src = `${import.meta.env.BASE_URL}img/profil.jpg`;
        
        // Force l'affichage après 1 seconde si les animations n'ont pas fonctionné
        const timer = setTimeout(() => {
            setForceVisible(true);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    // Classes qui combinent l'animation et le forçage
    const heroClass = `hero-section ${headerVisible || forceVisible ? 'is-visible' : ''}`;
    const introClass = `intro-section ${introVisible || forceVisible ? 'is-visible' : ''}`;
    const servicesClass = `services-section ${servicesVisible || forceVisible ? 'is-visible' : ''}`;
    const ctaClass = `cta-section ${ctaVisible || forceVisible ? 'is-visible' : ''}`;

    return (
        <div className="home-container">
            {/* Section Hero */}
            <section ref={headerRef} className={heroClass}>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-image">
                            <div className="profile-image-container">
                                <img 
                                    src={`${import.meta.env.BASE_URL}img/profil.jpg`} 
                                    alt="Yann Blanc" 
                                    className="profile-image"
                                    onError={(e) => {
                                        console.error('Erreur de chargement image');
                                        e.target.src = 'https://via.placeholder.com/280?text=Yann+Blanc';
                                    }}
                                />
                                <div className="image-backdrop"></div>
                            </div>
                        </div>
                        <div className="hero-text">
                            <h1>Yann Blanc</h1>
                            <h2>Administrateur Systèmes & Réseaux <span className="accent">•</span> Cybersécurité</h2>
                            <div className="typing-container">
                                <span className="typing-text">Protection des infrastructures informatiques</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Introduction - avec forçage de visibilité si nécessaire */}
            <section ref={introRef} className={introClass}>
                <div className="container">
                    <div className="intro-card">
                        <div className="section-heading">
                            <h3>À propos de moi</h3>
                            <div className="heading-underline"></div>
                        </div>
                        <p className="intro-text">
                            Bonjour, je suis <strong>Yann Blanc</strong>, bientôt diplômé d'un <span className="highlight">Bachelor 3 en cybersécurité</span> à Ynov Campus. Passionné par l'administration des systèmes, la sécurisation des infrastructures et les tests d'intrusion, je cherche à intégrer une équipe où je pourrai mettre mes compétences au service de la fiabilité et de la sécurité informatique.
                        </p>
                        <p className="intro-text">
                            Curieux, rigoureux et impliqué, je construis chaque jour une expertise à travers mes projets concrets, mes défis techniques et mes expériences de mentorat.
                        </p>
                        <div className="tech-stack">
                            <div className="tech-badge">Active Directory</div>
                            <div className="tech-badge">Linux</div>
                            <div className="tech-badge">VMware</div>
                            <div className="tech-badge">TCP/IP</div>
                            <div className="tech-badge">Firewall</div>
                            <div className="tech-badge">Kali Linux</div>
                            <div className="tech-badge">Pentest</div>
                            <div className="tech-badge">SIEM</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Services */}
            <section ref={servicesRef} className={servicesClass}>
                <div className="container">
                    <div className="section-heading">
                        <h3>Ce que je fais</h3>
                        <div className="heading-underline"></div>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="service-network">🖥️</i>
                            </div>
                            <h4>Administration Systèmes & Réseaux</h4>
                            <p>Conception et maintenance d'infrastructures sécurisées. Gestion Active Directory, solutions de virtualisation et services réseau.</p>
                            <ul className="service-skills">
                                <li>Active Directory</li>
                                <li>VMware / Proxmox</li>
                                <li>Windows Server</li>
                                <li>Linux</li>
                                <li>Supervision</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="service-security">🔐</i>
                            </div>
                            <h4>Cybersécurité & Pentesting</h4>
                            <p>Analyse des vulnérabilités, tests d'intrusion et mise en place de solutions défensives. Veille technologique sur les menaces actuelles.</p>
                            <ul className="service-skills">
                                <li>Audit sécurité</li>
                                <li>Pentest</li>
                                <li>SIEM</li>
                                <li>Gestion des incidents</li>
                                <li>Conformité</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="service-dev">👨‍💻</i>
                            </div>
                            <h4>Projets Web & Mentorat</h4>
                            <p>Développement de sites vitrines et d'applications web sécurisées. Accompagnement et formation d'étudiants en informatique.</p>
                            <ul className="service-skills">
                                <li>HTML/CSS/JavaScript</li>
                                <li>React</li>
                                <li>Sécurité Web</li>
                                <li>Formation</li>
                                <li>Documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section ref={ctaRef} className={ctaClass}>
                <div className="container">
                    <div className="cta-card">
                        <h3>Intéressé par mon profil ?</h3>
                        <p>Découvrez mes projets et réalisations dans le domaine de l'administration système et de la cybersécurité.</p>
                        <div className="cta-buttons">
                            <Link to="/portfolio" className="btn btn-primary">
                                Découvrir mes projets
                                <span className="btn-icon">→</span>
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Me contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accueil;