import React from 'react';
import './about.css';

import Hexagon from './hexagon';

import SectionHeader from '../app/section-header';

import IMAGE_ARYAN from '../../assets/aryan.png';

import IMAGE_JAVASCRIPT from '../../assets/javascript.png';
import IMAGE_MSSQL from '../../assets/mssql.png';
import IMAGE_MONGODB from '../../assets/mongodb.png';
import IMAGE_SASS from '../../assets/sass.png';
import IMAGE_CSS from '../../assets/css.png';
import IMAGE_REACT from '../../assets/react.png';
import IMAGE_NODEJS from '../../assets/nodejs.png';
import IMAGE_HTML from '../../assets/html.png';
import IMAGE_BOOTSTRAP from '../../assets/bootstrap.png';
import IMAGE_CSHARP from '../../assets/csharp.png';
import IMAGE_GODOT from '../../assets/godot.svg';

const About = (props)=>{


    // STATIC DATA
    const DATA_ABOUTME = "That's me! :) Software development is not new to me. I've created android apps as well as games in the past and currently have decided to become a master of one trade alongside being the jack of all, thus making my foreseeable goal to 'creating a plethora of awesome web applications'. Currently, I work at Deloitte making web applications using .NET and C#. I keep learning new and relevant technologies and right now, I do full stack development using MongoDB, Node, Express and React. In my spare time, I like to read and write and would love to talk at length about our common interests should I get that opportunity.";
    const DATA_HEXAGONS = [
        {
            header: "speed", 
            subheader: "user experience is extremely important to me"
        },
        {
            header: "reliability", 
            subheader: "my applications handle all errors well"
        },
        {
            header: "security", 
            subheader: "I keep up with modern security practices"
        },
        {
            header: "human touch", 
            subheader: "I like when my apps leave a lasting impression on people with the first interaction, much like with meeting interesting people"
        },
    ];

    const GetProperHexaSVG = (key) => {
        const styleValue = {width:"24px", height:"24px"};
        const fillColor = "#F1F1F1";
        switch(key){
            case "speed":
                return(
                    <svg style={styleValue} viewBox="0 0 24 24">
                        <path fill={fillColor} d="M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18A1,1 0 0,1 1,17A1,1 0 0,1 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H5.05L5,12L5.05,13H3M4,8A1,1 0 0,1 3,7A1,1 0 0,1 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z" />
                    </svg>
                );
            case "reliability":
                return(
                    <svg style={styleValue} viewBox="0 0 24 24">
                        <path fill={fillColor} d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
                    </svg>
                );
            case "security":
                return(
                    <svg style={styleValue} viewBox="0 0 24 24">
                        <path fill={fillColor} d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" />
                    </svg>
                );
            case "human touch":
                return(
                    <svg style={styleValue} viewBox="0 0 24 24">
                        <path fill={fillColor} d="M5,1C5,3.7 6.56,6.16 9,7.32V22H11V15H13V22H15V7.31C17.44,6.16 19,3.7 19,1H17A5,5 0 0,1 12,6A5,5 0 0,1 7,1M12,1C10.89,1 10,1.89 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3C14,1.89 13.11,1 12,1Z" />
                    </svg>
                );
            default:
                return(
                    <div></div>
                );
        }
    }



    return(
    <div id="about" className="flecol box about obs-section">
        <SectionHeader>About</SectionHeader>

        {/* HEXAGONS  */}
        
        <div className="hexa-container flerow">
            {DATA_HEXAGONS.map(hexagon => {
                return(
                    <Hexagon key={hexagon.header} hexa_header={hexagon.header} hexa_subheader={hexagon.subheader}>
                        {GetProperHexaSVG(hexagon.header)}
                    </Hexagon>
                );
            })}
        </div>
        

        {/* TECH I USE */}
        
        
        <div className="about__info flerow">
            <div className="about__info_aboutme flecol">
                <img src={IMAGE_ARYAN} alt=""/>
                {DATA_ABOUTME}
            </div>
            <div className="about__info_tech">
                <div className="tech flerow obs-anim-appear">
                    <img title="Javascript ES5/ES6+" alt="javascript" src={IMAGE_JAVASCRIPT}/>
                    <img title="Node.js" src={IMAGE_NODEJS} alt="Node.js"/>
                    <img title="React.js" src={IMAGE_REACT} alt="React.js"/>
                    <img title="MongoDB" src={IMAGE_MONGODB} alt="MongoDB"/>
                    <img title="HTML5" src={IMAGE_HTML} alt="HTML5"/>
                    <img title="CSS3" src={IMAGE_CSS} alt="CSS3"/>
                    <img title="Microsoft SQL SERVER" src={IMAGE_MSSQL} alt="Microsoft SQL SERVER"/>
                    <img title="C SHARP" src={IMAGE_CSHARP} alt="C SHARP"/>
                    <img title="SCSS/SASS" src={IMAGE_SASS} alt="SCSS/SASS"/>
                    <img title="Godot Game Engine" src={IMAGE_GODOT} alt="Godot Game Engine"/>
                    <img title="Bootstrap 4" src={IMAGE_BOOTSTRAP} alt="Bootstrap 4"/>
                </div>
            </div>
        </div>


    </div>
    )
}

export default About;