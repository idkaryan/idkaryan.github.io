import React from 'react';
import './section-header.css';

const SectionHeader = props => {
    return(
    <div className="bow sechead flecol">
        <span className="sechead__title">{props.children}</span>
        <div className="sechead__under"></div>
    </div>
    );
}

export default SectionHeader;