import React, { useEffect } from "react";
import "./App.css";

import Navigation from "../navigation/navigation";
import About from "../about/about";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
import BGCanvas from "./canvaseffect/bgcanvas";

function App() {

  useEffect(() => {
    let onWindowClick = event => {
      let modal = document.querySelector("#project-modal");
      if (!modal) {
        return;
      }
      if (event.target === modal) {
        modal.classList.toggle("hide-modal");
      }
    };
    window.addEventListener("click", onWindowClick);
  });

  // ANIMATION - INTERSECTION OBSERVERS
  // FOR NAVIGATION BAR UPDATES
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // console.log(`${entry.target.id} ${entry.intersectionRatio}`);
        const entryNav = document.querySelector(`#nav-${entry.target.id}`);
        if(entry.intersectionRatio === 0){
          entryNav.classList.remove("highlight");
        } else {
          entryNav.classList.add("highlight");
        }
      });
    }, {threshold: [0, 0.1]});

    const sectionTargets = document.querySelectorAll(".obs-section");
    sectionTargets.forEach(target => {
      sectionObserver.observe(target);
    });

    // SLIDE LEFT ELEMENTS
    const animObserverSlideLeft = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
          entry.target.classList.add("slide-left");
          animObserverSlideLeft.unobserve(entry.target);
        }
      });
    }, {threshold: [0.5]});

    const animTargetsSlideLeft = document.querySelectorAll(".obs-anim");
    animTargetsSlideLeft.forEach(target => {
      animObserverSlideLeft.observe(target);
    });

    // JUST APPEAR ELEMENTS
    const animObserverAppear = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
          entry.target.classList.add("appear");
          animObserverAppear.unobserve(entry.target);
        }
      });
    }, {threshold: [0.1]});

    const animTargetsAppear = document.querySelectorAll(".obs-anim-appear");
    animTargetsAppear.forEach(target => {
      animObserverAppear.observe(target);
    });
  })

  return (
    <React.Fragment>
      <div className="App">
        <BGCanvas />
        <div id="home" className="intro box obs-section">
          <p>
            Hello, I'm <span className="name">Kumar Aryan</span>.
          </p>
          <p>I'm a full stack web developer.</p>
        </div>
        <Navigation />
        <About />
        <Projects />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;
