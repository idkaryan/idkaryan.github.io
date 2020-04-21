import React from 'react';
import './hexagon.css';

const Hexagon = (props)=>{
    const hexa_header = props.hexa_header || "";
    const hexa_subheader = props.hexa_subheader || "";
    return(
        <div className="flecol individual-hex">
            <div className="hexa obs-anim-appear">
                {props.children}
            </div>
            <div className="hexagon-info obs-anim-appear">
                {hexa_header}
            </div>
            <div className="hexagon-more-info obs-anim-appear">
                {hexa_subheader}
            </div>
        </div>
    );
}

export default Hexagon;