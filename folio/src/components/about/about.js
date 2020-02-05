import React from 'react';
import './about.css';

import SectionHeader from '../app/section-header';

const About = (props)=>{
    return(
    <div id="about" className="flecol box about">
        <SectionHeader>About</SectionHeader>
        {/* priorities hex icons */}
        {/* my pic, info, tech i use */}
        <div className="about__info flerow bow">
            <div className="about__info_aboutme">
                what I'm gonna say is not
            </div>
            <div className="about__info_tech">
                asdasd
            </div>
        </div>
    </div>
    )
}

export default About;