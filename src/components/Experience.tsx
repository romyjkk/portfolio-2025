import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience() {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".first",
      { transform: "translateY(80%)", ease: "back.out" },
      { transform: "translateY(-10%)", ease: "back.out" },
      0
    );
    // tl.to(".first .experienceContainer", { "--before-opacity": 0 }, 1);
    if (window.innerWidth < 768) {
      tl.fromTo(
        ".second",
        { transform: "translateY(80%)", ease: "back.out" },
        { transform: "translateY(-5%)", ease: "back.out" },
        1
      );
      tl.fromTo(
        ".third",
        { transform: "translateY(80%)", ease: "back.out" },
        { transform: "translateY(0%)", ease: "back.out" },
        2
      );
    } else if (window.innerWidth > 768) {
      tl.fromTo(
        ".second",
        { transform: "translateY(80%)", ease: "back.out" },
        { transform: "translateY(0%)", ease: "back.out" },
        1
      );
      tl.fromTo(
        ".third",
        { transform: "translateY(80%)", ease: "back.out" },
        { transform: "translateY(10%)", ease: "back.out" },
        2
      );
    }

    gsap.to(".tubeFiller", {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "none",
      scrollTrigger: {
        trigger: ".myExperience",
        start: "top top",
        end: "bottom +=-500",
        // markers: true,
        pinSpacing: true,
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: ".myExperience",
      start: "top top",
      end: "bottom +=-500",
      pin: ".myExperience",
      // markers: true,
      pinSpacing: true,
      scrub: true,
      animation: tl,
    });
  });
  return (
    <section className="myExperience">
      {/* <h2 className="title">My experience</h2> */}
      <div className="timelineContainer">
        {/* <h2 className="year">2023</h2> */}
        <figure className="timeline">
          {/* tube */}
          <svg
            className="sm tube"
            width="56"
            height="1220"
            viewBox="0 0 56 1220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 744V1214.5H51V717.5V627.5V5H5V654.5V744Z"
              stroke="#2AB01C"
              stroke-width="10"
            />
          </svg>

          <svg
            className="lg tube"
            width="146"
            height="1220"
            viewBox="0 0 146 1220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56 625.42L144.025 712.954L145.5 714.421V1219.5H89.5V745.664L1.57812 663.146L0 661.664V0H56V625.42ZM10 657.335L97.9219 739.854L99.5 741.336V1209.5H135.5V718.579L47.4746 631.046L46 629.579V10H10V657.335Z"
              fill="#1e8114"
            />
          </svg>

          {/* tube filler */}
          <svg
            className="tubeFiller sm"
            width="56"
            height="1220"
            viewBox="0 0 56 1220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 744V1214.5H51V717.5V627.5V5H5V654.5V744Z"
              fill="#1e8114"
              stroke="#1e8114"
              stroke-width="10"
            />
          </svg>

          <svg
            className="tubeFiller lg"
            width="146"
            height="1220"
            viewBox="0 0 146 1220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M94.5 744V1214.5H140.5V717.5L50 627V5H5V654.5L94.5 744Z"
              fill="#1e8114"
              stroke="#1e8114"
              stroke-width="10"
            />
          </svg>
        </figure>
      </div>
      <section className="experiences">
        {/* <h2>MY EXPERIENCES</h2> */}
        <section className="experience first">
          <div className="experienceContainer">
            <div className="experienceContainerBorder">
              <div className="experienceContainerClip">
                <header className="experienceTextContainer">
                  <h2>My experiences</h2>
                </header>
                <p>
                  During my time at CMD, I got to do two internships. During
                  both internships I worked as a front-end developer, since my
                  goal was to improve my skills significantly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="experience second">
          <div className="experienceContainer">
            <div className="experienceContainerBorder">
              <div className="experienceContainerClip">
                <header className="experienceTextContainer">
                  <h2>GO2PEOPLE</h2>
                  <h3>Front-end internship</h3>
                  <small>February 2023 - April 2023</small>
                </header>
                <p>
                  At Go2People, I upgraded my front-end (and back-end) skills by
                  working on different complex assignments, using{" "}
                  <strong className="red">
                    HTML, (S)CSS, JavaScript & PHP
                  </strong>{" "}
                  (check out 'Horrorflix').
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="experience third">
          <div className="experienceContainer">
            <div className="experienceContainerBorder">
              <div className="experienceContainerClip">
                <header className="experienceTextContainer">
                  <h2>KOBALT DIGITAL</h2>
                  <h3>Front-end internship</h3>
                  <small>February 2024 - July 2024</small>
                </header>
                <p>
                  At Kobalt Digital I worked on real projects, like their very
                  own website, using <strong className="red">Statamic</strong>.
                  In addition to that I worked with{" "}
                  <strong className="red">
                    WordPress, Blade, Tailwind CSS
                  </strong>{" "}
                  and dove deep into <strong className="red">WCAG.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Experience;
