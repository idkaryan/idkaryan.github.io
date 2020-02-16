import React from 'react';
import './project-modal.css';

const ProjectModal = props => {
    const TECH = props.techstack;

    return(
        <div id="project-modal" className="flecol hide-modal">
            <div id="modal-content" className="flecol">
                <div className="content-pic-tech flerow">
                    <img src={props.piclink} className="" alt=""/>
                    <div className="project-tech">
                        <ul>
                            {TECH && TECH.map(techItem => {
                                return(
                                    <li key={techItem}>{techItem}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="modal-content__info flecol">
                    <div className="modal-content__info_title">
                        {props.title}
                    </div>
                    <div className="modal-content__info_description">
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;