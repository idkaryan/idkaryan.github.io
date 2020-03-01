import React, { useState } from 'react';
import './projects.css';

import ProjectModal from './project-modal';
import SectionHeader from '../app/section-header';
import ProjectItemsList from './project-items-list';

const Projects = props => {

    const [modalObject, setModalObject] = useState({});

    const changeModal = (newModalValues) => {
        if(!newModalValues){
            return;
        }

        setModalObject(newModalValues);
    }

    return(
        <div id="projects" className="flecol projects box obs-section">
            <ProjectModal title={modalObject.title} desc={modalObject.desc} piclink={modalObject.piclink} techstack={modalObject.techstack} link={modalObject.link}/>
            
            <SectionHeader>Projects</SectionHeader>
            
            <div className="flerow project-item-container">
                <ProjectItemsList onChange={changeModal}></ProjectItemsList>
            </div>
        </div>
    )
}

export default Projects;