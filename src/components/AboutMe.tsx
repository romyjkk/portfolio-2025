import portrait from "/me.webp";
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutMe() {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    const makeGlitch1 = (selector: string) => {
      const glitchTl = gsap.timeline();

      glitchTl
        .to(selector, { x: 3, y: -2, duration: 0.05 })
        .to(selector, { x: -2, y: 2, duration: 0.05 })
        .to(selector, { x: 4, y: -1, duration: 0.05 })
        .to(selector, { x: 0, y: 0, duration: 0.05 });

      return glitchTl;
    };
    const makeGlitch2 = (selector: string) => {
      const glitchTl2 = gsap.timeline();
      glitchTl2
        .to(selector, { x: -3, y: 2, duration: 0.05 })
        .to(selector, { x: 2, y: -2, duration: 0.05 })
        .to(selector, { x: -4, y: 1, duration: 0.05 })
        .to(selector, { x: 0, y: 0, duration: 0.05 });
      return glitchTl2;
    };

    tl.fromTo(".introductionText", { opacity: 0 }, { opacity: 1 }, 0.5)
      .fromTo(".introductionTextCopy1", { opacity: 0 }, { opacity: 1 }, 0.5)
      .fromTo(".introductionTextCopy2", { opacity: 0 }, { opacity: 1 }, 0.5)
      .fromTo(
        ".portraitContainer figure img",
        { webkitFilter: "brightness(1)", filter: "brightness(1)" },
        {
          webkitFilter: "brightness(0.2)",
          filter: "brightness(0.2)",
        },
        0.5
      )
      .add(makeGlitch2(".introductionTextCopy1"), 0.6)
      .add(makeGlitch1(".introductionTextCopy2"), 0.6)
      .add(makeGlitch1(".introductionText"), 0.7);

    ScrollTrigger.create({
      trigger: "#aboutMeContainer",
      start: "top top",
      end: "bottom +=500",
      pin: window.innerWidth > 768 ? ".me" : false,
      pinSpacing: true,
      toggleActions:
        window.innerWidth > 768
          ? "restart none reverse reverse"
          : "play none none none",
      animation: tl,
    });
  });
  return (
    <>
      <section className="aboutMeContainer" id="aboutMeContainer">
        <section className="me">
          <div className="portraitContainer">
            <figure>
              <img src={portrait} alt="Portrait of me" />
            </figure>
            <p className="introductionText">
              In April of 2025, I graduated from the Amsterdam University of
              Applied Sciences (HvA) with a BSc in Communication & Multimedia
              Design. During my study I focused on front-end development by
              picking related subjects and doing both my internships as a
              front-end developer.
            </p>
            <p className="introductionTextCopy1">
              In April of 2025, I graduated from the Amsterdam University of
              Applied Sciences (HvA) with a BSc in Communication & Multimedia
              Design. During my study I focused on front-end development by
              picking related subjects and doing both my internships as a
              front-end developer.
            </p>
            <p className="introductionTextCopy2">
              In April of 2025, I graduated from the Amsterdam University of
              Applied Sciences (HvA) with a BSc in Communication & Multimedia
              Design. During my study I focused on front-end development by
              picking related subjects and doing both my internships as a
              front-end developer.
            </p>
          </div>

          <div className="textContainer">
            <div className="text">
              <h2>Romy Jongkees</h2>
              <h2>Front-end developer</h2>
              <h2>Romy Jongkees</h2>
              <h2>Front-end developer</h2>
            </div>
            <div className="text">
              <h2>Romy Jongkees</h2>
              <h2>Front-end developer</h2>
              <h2>Romy Jongkees</h2>
              <h2>Front-end developer</h2>
            </div>
            <div className="text">
              <h2>Romy Jongkees</h2>
              <h2>Front-end developer</h2>
              <h2>Romy Jongkees</h2>
              <h2>Front-end developer</h2>
            </div>
            <div className="text">
              <h2>Romy Jongkees</h2>
              <h2>Front-end developer</h2>
              <h2>Romy Jongkees</h2>
              <h2>Front-end developer</h2>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default AboutMe;
