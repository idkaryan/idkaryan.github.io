import React from "react";
import ProjectItem from "./project-item";

const PROJECTIMAGE_EZEZ = require("../../assets/projects/ezez.jpg");
const PROJECTIMAGE_APOLOGY = require("../../assets/projects/apology.png");
const PROJECTIMAGE_CAVESTORY = require("../../assets/projects/cavestory.gif");
const PROJECTIMAGE_FLAPPY = require("../../assets/projects/flappy.gif");
const PROJECTIMAGE_INSPICIO = require("../../assets/projects/inspicio.jpg");
const PROJECTIMAGE_SCRAPING = require("../../assets/projects/scraping.jpg");

const ProjectItemsList = (props) => {
  const changeModal = props.onChange;
  return (
    <React.Fragment>
      <ProjectItem
        on_change={changeModal}
        projectTitle="ezez URL shortener"
        projectThumb={PROJECTIMAGE_EZEZ}
        projectValues={{
          title: "ezez URL Shortener",
          desc:
            "This is a reimplementation of tiny.cc with the core features and which uses MongoDB in the backend as a database. Will soon buy a shorter domain and put this online for people to use.",
          piclink: PROJECTIMAGE_EZEZ,
          techstack: ["Node.js", "React", "MongoDB", "Mongoose", "Express"],
          link: "https://ezezlink.herokuapp.com",
        }}
      />

      <ProjectItem
        on_change={changeModal}
        projectTitle="Apology : android game"
        projectThumb={PROJECTIMAGE_APOLOGY}
        projectValues={{
          title: "Apology - a brick breaking story",
          desc:
            "I created this game while working as a web developer full time in 2019. Created the art as well as did the programming. Solved complex problems such as creating level generator, boss fight, dialogue system. Got good feedback from people who played this as well.",
          piclink: PROJECTIMAGE_APOLOGY,
          techstack: ["Godot 3.1.1", "GDScript"],
          link:
            "https://play.google.com/store/apps/details?id=xyz.greeencircles.apology",
        }}
      />

      <ProjectItem
        on_change={changeModal}
        projectTitle="various kinds of scraping"
        projectThumb={PROJECTIMAGE_SCRAPING}
        projectValues={{
          title: "various kinds of scraping",
          desc:
            "Throughout my time programming for myself, I've created a plethora of automation tools to make my life easier doing tasks such as getting direct links of all the latest subscribed media, renaming subtitles files according to tv shows episode files, getting all free tutorial images from my favourite artists on patreon with one click, doing operations on excel files, etc.",
          piclink: PROJECTIMAGE_SCRAPING,
          techstack: [
            "Javascript",
            "Cheerio",
            "Puppeteer",
            "Python",
            "Beautiful Soup",
            "Scrapy",
          ],
        }}
      />
      <ProjectItem
        on_change={changeModal}
        projectTitle="Cave Story Clone"
        projectThumb={PROJECTIMAGE_CAVESTORY}
        projectValues={{
          title: "Cave Story clone",
          desc:
            "This project was done in 2016 while I was in college. Used C++ with a graphics library called SDL2 which provided API for taking keyboard input and drawing images on screen, using which I created this cavestory level. Used artwork from the original game.",
          piclink: PROJECTIMAGE_CAVESTORY,
          techstack: ["C++", "SDL2"],
        }}
      />

      <ProjectItem
        on_change={changeModal}
        projectTitle="Flappy Birds Clone"
        projectThumb={PROJECTIMAGE_FLAPPY}
        projectValues={{
          title: "Flappy Birds clone",
          desc:
            "This project was done in 2017 while I was in college. Learned using a scripting language(GDScript) as well as an open source game engine(Godot).",
          piclink: PROJECTIMAGE_FLAPPY,
          techstack: ["Godot 2.1.3", "GDScript", "orignal game art"],
        }}
      />

      <ProjectItem
        on_change={changeModal}
        projectTitle="Inspicio : android app"
        projectThumb={PROJECTIMAGE_INSPICIO}
        projectValues={{
          title: "Inspicio : android app",
          desc:
            "This project was done in 2018 while I was in college for an android app development competition which got me through the first out of two rounds. Used firebase for real time database updation. It's an app which helps employees in the organization to anonymously review other employees with certain constraints such people can't review direct subordinates.",
          piclink: PROJECTIMAGE_INSPICIO,
          techstack: ["Android Studio", "Firebase"],
        }}
      />
    </React.Fragment>
  );
};

export default ProjectItemsList;
