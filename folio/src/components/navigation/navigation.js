import React from 'react';
import './navigation.css';

const Navigation = (props) => {

    const hrefLink = "#undefined";
    const onAboutClick = (clickTarget)=>{
        let targetDiv = document.getElementById(clickTarget);
        if(!targetDiv){
            return;
        }
        console.log(targetDiv)
        window.scrollTo({
            top: targetDiv.offsetTop,
            behavior: 'smooth'
        });
    }
    return(
    <React.Fragment>
        <div className="navigation-main">
            <button className="navigation-button">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="navigation-links">
                <ul>
                    <li><a href={hrefLink} onClick={()=>{onAboutClick('home')}}>HOME</a></li>
                    <li><a href={hrefLink} onClick={()=>{onAboutClick('about')}}>ABOUT</a></li>
                    <li><a href={hrefLink} onClick={()=>{onAboutClick('projects')}}>PROJECTS</a></li>
                    <li><a href={hrefLink} onClick={()=>{onAboutClick('contact')}}>CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </React.Fragment>);
}

export default Navigation;