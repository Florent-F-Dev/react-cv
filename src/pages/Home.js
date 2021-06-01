import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="row">
                <div className="home-content">
                    <div className="home-content-pic">
                        <img src="./img/profil_pic.jpg" alt="Photo de profil" />
                    </div>
                    <div className="home-content-text">
                        <h2>Florent Fournier</h2>
                        <h3>Développeur web junior</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;