import React from 'react';

const SoftSkillLine = (props) => {
    return (
        <div className="soft-skill-line">
            <p><i class={props.icon}></i> {props.name} ({props.level})</p>
        </div>
    );
};

export default SoftSkillLine;