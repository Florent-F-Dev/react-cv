import React from 'react';

const ExperienceLine = (props) => {
    return (
        <div className="experience-line">
            <div className="experience-line-title">
                <h3>{props.title}</h3>
            </div>
            <div className="experience-line-content">
                <p>{props.content}</p>
            </div>
        </div>
    );
};

export default ExperienceLine;