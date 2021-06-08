import React from 'react';



const PortfolioCard = (props) => {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="portfolio-card-body">
                <div className="portfolio-card-body-img">
                    <img src={props.photo} alt="Photo du site" />
                </div>
                <div className="portfolio-card-body-description">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="portfolio-card-footer">
                <p>Technologies utilisées :</p>
                <div className="portfolio-card-footer-logo">
                    <i className={props.logo1}>{props.logoDetail1}</i>
                    <i className={props.logo2}>{props.logoDetail2}</i>
                    <i className={props.logo3}>{props.logoDetail3}</i>
                    <i className={props.logo4}>{props.logoDetail4}</i>
                    <i className={props.logo5}>{props.logoDetail5}</i>
                </div>
            </div>
            <div className="portfolio-card-link">
                <a href={props.link} target="_blank">Visiter le site</a>
            </div>
        </div>
    );
};

export default PortfolioCard;