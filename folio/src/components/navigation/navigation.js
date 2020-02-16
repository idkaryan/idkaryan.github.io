import React from 'react';
import './navigation.css';

const Navigation = (props) => {

    const hrefLink = "#undefined";

    const onAboutClick = (clickTarget)=>{
        let targetDiv = document.getElementById(clickTarget);
        if(!targetDiv){
            return;
        }
        window.scrollTo({
            top: targetDiv.offsetTop,
            behavior: 'smooth'
        });
        
        const mobileNav = document.querySelector("#mobile-nav");
        mobileNav.classList.remove("mobile-links-active");
    }


    const onShowNavClick = (event)=>{
        event.preventDefault();
        const mobileNav = document.querySelector("#mobile-nav");
        mobileNav.classList.toggle("mobile-links-active");
    }

    return(
    <React.Fragment>
        <div className="navigation-main">
            <button onClick={onShowNavClick} className="navigation-button">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="navigation-links">
                <ul>
                    <li><a id="nav-home" href={hrefLink} onClick={()=>{onAboutClick('home')}}>HOME</a></li>
                    <li><a id="nav-about" href={hrefLink} onClick={()=>{onAboutClick('about')}}>ABOUT</a></li>
                    <li><a id="nav-projects" href={hrefLink} onClick={()=>{onAboutClick('projects')}}>PROJECTS</a></li>
                    <li><a id="nav-contact" href={hrefLink} onClick={()=>{onAboutClick('contact')}}>CONTACT</a></li>
                </ul>
            </nav>
            <nav id="mobile-nav" className="navigation-links-mobile">
                <ul>
                    <li><a id="nav-home-mobile" href={hrefLink} onClick={()=>{onAboutClick('home')}}>HOME</a></li>
                    <li><a id="nav-about-mobile" href={hrefLink} onClick={()=>{onAboutClick('about')}}>ABOUT</a></li>
                    <li><a id="nav-projects-mobile" href={hrefLink} onClick={()=>{onAboutClick('projects')}}>PROJECTS</a></li>
                    <li><a id="nav-contact" href={hrefLink} onClick={()=>{onAboutClick('contact')}}>CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </React.Fragment>);
}

export default Navigation;