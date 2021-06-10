import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <>
            <Navigation />
            <div className="row">
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-content">
                    <div className="contact-content-info">
                        <div className="contact-content-info-address">
                            <h3>Adresse :</h3>
                            <p>Auriol 13390</p>
                        </div>
                        <div className="contact-content-info-tel">
                            <h3>Téléphone :</h3>
                            <p>06 84 50 61 87</p>
                        </div>
                        <div className="contact-content-info-mail">
                            <h3>E-mail :</h3>
                            <p>fournier.florent.88@gmail.com</p>
                        </div>
                        <div className="contact-content-info-pdf">
                            <h3>CV format pdf :</h3>
                            <a href="./docs/CV.pdf" target="_blank">CV.pdf</a>
                        </div>
                    </div>
                    <div className="contact-content-link">
                        <a href="https://www.linkedin.com/in/florent-fournier-48ba4a1b8/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/Florent-F-Dev" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;