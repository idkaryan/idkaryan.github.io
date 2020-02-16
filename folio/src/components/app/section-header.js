import React from 'react';
import './section-header.css';

const SectionHeader = props => {
    return(
    <div className="sechead flecol">
        <span className="sechead__title obs-anim">{props.children}</span>
        <div className="sechead__under obs-anim"></div>
    </div>
    );
}

export default SectionHeader;