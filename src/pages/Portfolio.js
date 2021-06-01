import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Portfolio = () => {
    return (
        <>
            <Navigation />
            <div className="row">
                <div className="portfolio-content">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Portfolio;