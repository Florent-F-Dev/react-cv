import React from 'react';

const FormationLine = (props) => {
    return (
        <div className="formation-line">
            <div className="formation-line-title">
                <h3>{props.title}</h3>
            </div>
            <div className="formation-line-content">
                <p>{props.content}</p>
            </div>
        </div>
    );
};

export default FormationLine;