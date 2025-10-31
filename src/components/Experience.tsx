import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "react";

function Experience() {
  // const experienceRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (window.innerWidth > 768) {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        ".first",
        { transform: "translateY(80%)", ease: "back.out" },
        { transform: "translateY(-15%)", ease: "back.out" },
        0
      );
      tl.fromTo(
        ".second",
        { transform: "translateY(80%)", ease: "back.out" },
        { transform: "translateY(-5%)", ease: "back.out" },
        1
      );
      tl.fromTo(
        ".third",
        { transform: "translateY(80%)", ease: "back.out" },
        { transform: "translateY(5%)", ease: "back.out" },
        2
      );

      gsap.to(".tubeFiller", {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: ".myExperience",
          start: "top top",
          end: "bottom +=-500",
          pinSpacing: true,
          scrub: true,
        },
      });
      ScrollTrigger.create({
        trigger: ".myExperience",
        start: "top top",
        end: "bottom +=-500",
        pin: ".myExperience",
        pinSpacing: true,
        scrub: true,
        animation: tl,
      });
    } else {
      const experiences = gsap.utils.toArray<HTMLElement>(".experience");
      experiences.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  });

  // gsap.fromTo(
  //   ".experience",
  //   {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1,
  //     ease: "power1.out",
  //     scrollTrigger: {
  //       trigger: "myExperience",
  //       start: "top top",
  //       end: "bottom +=-500",
  //       toggleActions: "play none none none",
  //     },
  //   }
  // );

  // const mobileTl = gsap.timeline();
  // mobileTl.fromTo(
  //   ".first",
  //   { opacity: 0, scale: 0 },
  //   { opacity: 1, scale: 1, duration: 1, ease: "power1.out" }
  // );
  // mobileTl.fromTo(
  //   ".second",
  //   { opacity: 0, scale: 0 },
  //   { opacity: 1, scale: 1, duration: 1, ease: "power1.out" },
  //   0.5
  // );
  // mobileTl.fromTo(
  //   ".third",
  //   { opacity: 0, scale: 0 },
  //   { opacity: 1, scale: 1, duration: 1, ease: "power1.out" },
  //   1
  // );

  return (
    <section className="myExperience">
      <div className="timelineContainer">
        <figure className="timeline">
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
              strokeWidth="10"
            />
          </svg>
        </figure>
      </div>
      <section className="experiences">
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
