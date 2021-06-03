import React from 'react';
import ExperienceLine from '../components/ExperienceLine';
import Footer from '../components/Footer';
import FormationLine from '../components/FormationLine';
import Navigation from '../components/Navigation';

const skills = () => {
    return (
        <>
            <Navigation />
            <div className="row">
                <div className="skills-content">
                    <div className="experiences">
                        <div className="experiences-title">
                            <h2>Experiences</h2>
                        </div>
                        <div className="experiences-content">
                            <ExperienceLine title="Stagiaire développeur web" content="Afpa Marseille Saint-Jérôme | 2021" />
                            <ExperienceLine title="Magasinier-cariste" content="Stac Sud-Est | 2019" />
                            <ExperienceLine title="Magasinier-cariste" content="Richardson Aubagne | 2011-2018" />
                        </div>
                    </div>
                    <div className="formations">
                        <div className="formations-title">
                            <h2>Formations</h2>
                        </div>
                        <div className="formations-content">
                            <FormationLine title="Titre professionnel développeur web et web mobile niveau 5" content="Afpa Marseille Saint-Jérôme | 2020-2021" />
                            <FormationLine title="Caces 1-3-5" content="Adif Gardanne | 2019" />
                        </div>
                    </div>
                    <div className="hard-skills">
                        <div className="hard-skills-title">
                            <h2>Compétences</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default skills;