import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav'>
            <div className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active"><i class="fas fa-home"></i><span> Accueil</span></NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/competences" className="nav-link" activeClassName="active"><i class="fas fa-mountain"></i><span> Compétences</span></NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/portfolio" className="nav-link" activeClassName="active"><i class="fas fa-images"></i><span> Portfolio</span></NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/contact" className="nav-link" activeClassName="active"><i class="fas fa-address-book"></i><span> Contact</span></NavLink>
            </div>
        </div>
    );
};

export default Navigation;