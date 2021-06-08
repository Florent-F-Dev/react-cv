import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
    return (
        <>
            <Navigation />
            <div className="row">
                <div className="portfolio-title">
                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio-content">
                    <PortfolioCard
                        title="Training symfony"
                        photo="./img/training_sym.png"
                        description="Site de type e-commerce conçu dans le cadre de ma formation sur le framework symfony"
                        link="https://training-symfony.herokuapp.com/"
                        logo1="fab fa-html5"
                        logo2="fab fa-bootstrap"
                        logo3="fab fa-symfony"
                    />
                    <PortfolioCard
                        title="CV"
                        photo="./img/cv.png "
                        description="Cv au format HTML conçu avec la librairie Bootstrap"
                        link="https://fournierflorent.alwaysdata.net/cv/"
                        logo1="fab fa-html5"
                        logo2="fab fa-bootstrap"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Portfolio;