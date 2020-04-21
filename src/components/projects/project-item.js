import React from 'react';
import './project-item.css';

const ProjectItem = props =>{

    const modalInfo = props.projectValues;

    const toggleModal = (event)=>{
        let modal = document.querySelector("#project-modal");
        modal.classList.toggle("hide-modal");
        props.on_change(modalInfo);
    }

    return(
        <div className="project-item-wrapper obs-anim-appear">
            <img src={props.projectThumb} alt=""/>
            <div className="project-item__info-wrapper">
                <div className="project-item__info flecol">
                    <div className="project-item__title">{props.projectTitle}</div>
                    <button onClick={toggleModal} className="project-item_button">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;