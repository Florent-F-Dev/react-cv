import React from 'react';
import ExperienceLine from '../components/ExperienceLine';
import Footer from '../components/Footer';
import FormationLine from '../components/FormationLine';
import Navigation from '../components/Navigation';
import SoftSkillLine from '../components/SoftSkillLine';

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
                    <div className="soft-skills">
                        <div className="soft-skills-title">
                            <h2>Compétences</h2>
                        </div>
                        <div className="soft-skills-content">
                            <SoftSkillLine icon="fab fa-html5" name="HTML" level="intermédiaire" />
                            <SoftSkillLine icon="fab fa-css3-alt" name="CSS" level="intermédiaire" />
                            <SoftSkillLine icon="fab fa-php" name="PHP" level="intermédiaire" />
                            <SoftSkillLine icon="fas fa-database" name="PHPMyAdmin/MySQL" level="intermédiaire" />
                            <SoftSkillLine icon="fab fa-bootstrap" name="PHP" level="intermédiaire" />
                            <SoftSkillLine icon="fab fa-github" name="GitHub" level="intermédiaire" />
                            <SoftSkillLine icon="fab fa-github" name="GitHub" level="intermédiaire" />
                            <SoftSkillLine icon="fab fa-symfony" name="Symfony" level="Débutant" />
                            <SoftSkillLine icon="fab fa-react" name="ReactJS" level="Débutant" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default skills;