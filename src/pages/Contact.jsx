import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Ici, vous pourriez ajouter un service comme Formspree pour traiter le formulaire
        alert('Merci pour votre message! Je vous contacterai bientôt.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container">
            <h1>Contact</h1>
            
            <div className="contact-info">
                <p>Vous pouvez me contacter aux coordonnées suivantes :</p>
                <ul>
                    <li>Email : <a href="mailto:yann.blanc69@ynov.com">yann.blanc69@ynov.com</a></li>
                    <li>LinkedIn : <a href="https://linkedin.com/in/yannblanc" target="_blank" rel="noopener noreferrer">linkedin.com/in/yannblanc</a></li>
                    <li>GitHub : <a href="https://github.com/yannblanc75" target="_blank" rel="noopener noreferrer">github.com/yannblanc75</a></li>
                </ul>
            </div>
            
            <h2>Ou utilisez le formulaire ci-dessous :</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="message">Message :</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;