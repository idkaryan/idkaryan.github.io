import React from 'react';
import ProjectItem from './project-item';


const ProjectItemsList = props=>{
    const changeModal = props.onChange;
    return(
        <React.Fragment>

            <ProjectItem 
                on_change={changeModal}
                projectTitle="ezez URL shortener" 
                projectThumb="https://i.imgur.com/BkBGSmv.png"
                projectValues={{
                    title:"ezez URL Shortener", 
                    desc:"This is a reimplementation of tiny.cc with the core features and which uses MongoDB in the backend as a database. Will soon buy a shorter domain and put this online for people to use.", 
                    piclink:"https://i.imgur.com/BkBGSmv.png", 
                    techstack:["Node.js", "React", "MongoDB", "Mongoose", "Express"]
                }}
            />
            
            <ProjectItem 
                on_change={changeModal}
                projectTitle="Apology : android game" 
                projectThumb="https://i.imgur.com/ZXkkfDF.png"
                projectValues={{
                    title:"Apology - a brick breaking story", 
                    desc:"I created this game while working as a web developer full time in 2019. Created the art as well as did the programming. Solved complex problems such as creating level generator, boss fight, dialogue system. Got good feedback from people who played this as well. link : https://play.google.com/store/apps/details?id=xyz.greeencircles.apology", 
                    piclink:"https://i.imgur.com/ZXkkfDF.png", 
                    techstack:["Godot 3.1.1", "GDScript"]
                }}
            />

            <ProjectItem 
                on_change={changeModal}
                projectTitle="various kinds of scraping" 
                projectThumb="https://i.imgur.com/HkjmgpM.png"
                projectValues={{
                    title:"various kinds of scraping", 
                    desc:"Throughout my time programming for myself, I've created a plethora of automation tools to make my life easier doing tasks such as getting direct links of all the latest subscribed media, renaming subtitles files according to tv shows episode files, getting all free tutorial images from my favourite artists on patreon with one click, doing operations on excel files, etc.", 
                    piclink:"https://i.imgur.com/HkjmgpM.png", 
                    techstack:["Javascript", "Cheerio", "Puppeteer", "Python", "Beautiful Soup", "Scrapy"]
                }}
            />
            <ProjectItem 
                on_change={changeModal}
                projectTitle="Cave Story Clone" 
                projectThumb="http://kumararyan.com/assets/img/cave_story.gif"
                projectValues={{
                        title:"Cave Story clone", 
                        desc:"Did this in 2018 while in college. Used C++ with a graphics library called SDL2 which provided API for taking keyboard input and drawing images on screen, using which I created this cavestory level. Used artwork from the original game.", 
                        piclink:"http://kumararyan.com/assets/img/cave_story.gif", 
                        techstack:["C++", "SDL2"]
                }}
            />
            
            <ProjectItem 
                on_change={changeModal}
                projectTitle="Flappy Birds Clone" 
                projectThumb="https://i.imgur.com/wvY7uox.gif"
                projectValues={{
                    title:"Flappy Birds clone", 
                    desc:"This project was done in 2018 while I was in college. Learned using a scripting language(GDScript) as well as an open source game engine(Godot).", 
                    piclink:"https://i.imgur.com/wvY7uox.gif", 
                    techstack:["Godot 2.1.3", "GDScript", "orignal game art"]
                }}
            />

            <ProjectItem 
                on_change={changeModal}
                projectTitle="Inspicio : android app" 
                projectThumb="https://i.imgur.com/SgAAZkc.png"
                projectValues={{
                    title:"Inspicio : android app", 
                    desc:"This project was done in 2019 while I was in college for an android app development competition which got me through the first out of two rounds. Used firebase for real time database updation. It's an app which helps employees in the organization to anonymously review other employees with certain constraints such people can't review direct subordinates.", 
                    piclink:"https://i.imgur.com/SgAAZkc.png", 
                    techstack:["Android Studio", "Firebase"]
                }}
            />

        </React.Fragment>
    );
}

export default ProjectItemsList;