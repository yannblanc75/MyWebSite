import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Competences = () => {
    const [headerRef, headerVisible] = useScrollAnimation(0.1);
    const [adminRef, adminVisible] = useScrollAnimation(0.1);
    const [securityRef, securityVisible] = useScrollAnimation(0.1);
    const [virtualizationRef, virtualizationVisible] = useScrollAnimation(0.1);
    const [projectRef, projectVisible] = useScrollAnimation(0.1);
    const [supportRef, supportVisible] = useScrollAnimation(0.1);
    const [conclusionRef, conclusionVisible] = useScrollAnimation(0.1);

    return (
        <div className="competences-container">
            {/* En-tête */}
            <section 
                ref={headerRef} 
                className={`competences-header ${headerVisible ? 'is-visible' : ''}`}
            >
                <div className="container">
                    <h1>Mes Compétences</h1>
                    <div className="introduction-card">
                        <p>En tant qu'Administrateur Système, Réseaux et Sécurité, je possède une expertise approfondie dans la gestion et la sécurisation des infrastructures informatiques. Voici un aperçu de mes principales compétences :</p>
                    </div>
                </div>
            </section>

            {/* Administration des Systèmes et Réseaux */}
            <section 
                ref={adminRef} 
                className={`competence-section ${adminVisible ? 'is-visible' : ''}`}
            >
                <div className="container">
                    <div className="competence-card">
                        <div className="competence-icon">
                            <i className="skill-icon">🖥️</i>
                        </div>
                        <div className="competence-content">
                            <h2>Administration des Systèmes et Réseaux</h2>
                            <div className="competence-details">
                                <div className="detail-item">
                                    <h3>Gestion de serveurs</h3>
                                    <p>Gestion et maintenance des serveurs et des infrastructures réseau, incluant la configuration, le suivi des performances et la résolution de problèmes.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Configuration système</h3>
                                    <p>Installation, configuration et mise à jour des systèmes d'exploitation (Windows Server, Linux) et des logiciels critiques pour l'entreprise.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Optimisation</h3>
                                    <p>Surveillance proactive des performances du système et optimisation des ressources pour garantir des performances optimales.</p>
                                </div>
                            </div>
                            <div className="skills-badges">
                                <span className="skill-badge">Windows Server</span>
                                <span className="skill-badge">Active Directory</span>
                                <span className="skill-badge">Linux</span>
                                <span className="skill-badge">TCP/IP</span>
                                <span className="skill-badge">DNS</span>
                                <span className="skill-badge">DHCP</span>
                                <span className="skill-badge">PowerShell</span>
                                <span className="skill-badge">Bash</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sécurité Informatique */}
            <section 
                ref={securityRef} 
                className={`competence-section ${securityVisible ? 'is-visible' : ''}`}
            >
                <div className="container">
                    <div className="competence-card">
                        <div className="competence-icon">
                            <i className="skill-icon">🔐</i>
                        </div>
                        <div className="competence-content">
                            <h2>Sécurité Informatique</h2>
                            <div className="competence-details">
                                <div className="detail-item">
                                    <h3>Politiques de sécurité</h3>
                                    <p>Mise en œuvre de politiques de sécurité robustes pour protéger les données sensibles et les infrastructures contre les menaces internes et externes.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Outils de protection</h3>
                                    <p>Gestion des pare-feu, des systèmes de détection d'intrusion (IDS/IPS) et des solutions antivirus/anti-malware pour une défense en profondeur.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Audit et conformité</h3>
                                    <p>Réalisation d'audits de sécurité réguliers, application des correctifs nécessaires et maintien de la conformité aux normes de l'industrie.</p>
                                </div>
                            </div>
                            <div className="skills-badges">
                                <span className="skill-badge">Firewall</span>
                                <span className="skill-badge">IDS/IPS</span>
                                <span className="skill-badge">VPN</span>
                                <span className="skill-badge">Cryptographie</span>
                                <span className="skill-badge">Pentesting</span>
                                <span className="skill-badge">SIEM</span>
                                <span className="skill-badge">ISO 27001</span>
                                <span className="skill-badge">RGPD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Virtualisation et Conteneurisation */}
            <section 
                ref={virtualizationRef} 
                className={`competence-section ${virtualizationVisible ? 'is-visible' : ''}`}
            >
                <div className="container">
                    <div className="competence-card">
                        <div className="competence-icon">
                            <i className="skill-icon">📦</i>
                        </div>
                        <div className="competence-content">
                            <h2>Virtualisation et Conteneurisation</h2>
                            <div className="competence-details">
                                <div className="detail-item">
                                    <h3>Environnements virtuels</h3>
                                    <p>Déploiement et gestion de machines virtuelles et d'hyperviseurs pour créer des infrastructures flexibles et économiques.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Conteneurisation</h3>
                                    <p>Utilisation de technologies de conteneurisation pour faciliter le déploiement d'applications et assurer leur portabilité.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Optimisation des ressources</h3>
                                    <p>Maximisation de l'utilisation des ressources matérielles grâce à la virtualisation et aux stratégies d'allocation dynamique.</p>
                                </div>
                            </div>
                            <div className="skills-badges">
                                <span className="skill-badge">VMware</span>
                                <span className="skill-badge">Hyper-V</span>
                                <span className="skill-badge">Proxmox</span>
                                <span className="skill-badge">Docker</span>
                                <span className="skill-badge">Kubernetes</span>
                                <span className="skill-badge">VDI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gestion de Projets Informatiques */}
            <section 
                ref={projectRef} 
                className={`competence-section ${projectVisible ? 'is-visible' : ''}`}
            >
                <div className="container">
                    <div className="competence-card">
                        <div className="competence-icon">
                            <i className="skill-icon">📊</i>
                        </div>
                        <div className="competence-content">
                            <h2>Gestion de Projets Informatiques</h2>
                            <div className="competence-details">
                                <div className="detail-item">
                                    <h3>Planification et exécution</h3>
                                    <p>Planification stratégique, exécution méthodique et suivi rigoureux de projets liés aux systèmes d'information.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Coordination d'équipe</h3>
                                    <p>Coordination efficace avec les différentes parties prenantes, de la direction aux équipes techniques, pour assurer le succès des projets.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Analyse et reporting</h3>
                                    <p>Analyse des besoins, suivi des indicateurs de performance et reporting transparent pour faciliter la prise de décision.</p>
                                </div>
                            </div>
                            <div className="skills-badges">
                                <span className="skill-badge">ITIL</span>
                                <span className="skill-badge">Agile</span>
                                <span className="skill-badge">Scrum</span>
                                <span className="skill-badge">Jira</span>
                                <span className="skill-badge">MS Project</span>
                                <span className="skill-badge">Gestion des risques</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Technique et Formation */}
            <section 
                ref={supportRef} 
                className={`competence-section ${supportVisible ? 'is-visible' : ''}`}
            >
                <div className="container">
                    <div className="competence-card">
                        <div className="competence-icon">
                            <i className="skill-icon">👨‍🏫</i>
                        </div>
                        <div className="competence-content">
                            <h2>Support Technique et Formation</h2>
                            <div className="competence-details">
                                <div className="detail-item">
                                    <h3>Assistance utilisateurs</h3>
                                    <p>Assistance réactive et proactive aux utilisateurs pour résoudre efficacement les problèmes techniques et minimiser les temps d'arrêt.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Formation technologique</h3>
                                    <p>Conception et animation de sessions de formation adaptées aux différents niveaux de compétence des utilisateurs.</p>
                                </div>
                                <div className="detail-item">
                                    <h3>Documentation</h3>
                                    <p>Élaboration de documentation technique et de guides utilisateurs clairs pour faciliter l'adoption des outils informatiques.</p>
                                </div>
                            </div>
                            <div className="skills-badges">
                                <span className="skill-badge">Help Desk</span>
                                <span className="skill-badge">Formation utilisateurs</span>
                                <span className="skill-badge">Rédaction technique</span>
                                <span className="skill-badge">Service Desk</span>
                                <span className="skill-badge">Pédagogie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section 
                ref={conclusionRef} 
                className={`conclusion-section ${conclusionVisible ? 'is-visible' : ''}`}
            >
                <div className="container">
                    <div className="conclusion-card">
                        <h3>Ces compétences en action</h3>
                        <p>Pour en savoir plus sur la manière dont j'ai appliqué ces compétences dans des projets concrets, je vous invite à visiter la section "Mes Projets" de ce site.</p>
                        <div className="action-btn">
                            <Link to="/portfolio" className="btn btn-primary">
                                Découvrir mes projets
                                <span className="btn-icon">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Competences;