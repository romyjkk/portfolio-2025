import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "./Button";

function ProjectPreview(props: {
  id: string;
  title: string;
  slug?: string;
  className: string;
  roles: string;
  mockup: string;
  projectImage: string;
  funkyShape: string;
  glitch1?: string;
  glitch2?: string;
  glitch3?: string;
  glitch4?: string;
}) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const shapeRef = useRef<HTMLImageElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const glitches = [
      props.glitch1,
      props.glitch2,
      props.glitch3,
      props.glitch4,
    ].filter(Boolean) as string[];

    if (
      !imgRef.current ||
      !containerRef.current ||
      !shapeRef.current ||
      !contentRef.current
    ) {
      return;
    }

    const makeGlitch = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      tl.set(imgRef.current, { attr: { src: props.projectImage } });
      tl.add(() => {
        const burst = gsap.timeline();
        glitches.forEach((img, i) => {
          burst.set(imgRef.current, { attr: { src: img } }, i * 0.05);
        });
        burst.set(
          imgRef.current,
          { attr: { src: props.projectImage } },
          "+=0.05"
        );
      });
      return tl;
    };

    const furtherAnimations = () => {
      const tl2 = gsap.timeline();
      tl2.fromTo(
        shapeRef.current,
        { scale: 0 },
        { scale: 1, duration: 1, ease: "power1.out" }
      );
      tl2.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.out" },
        0.5
      );
      return tl2;
    };

    const tl3 = gsap.timeline({ paused: true });
    tl3.add(makeGlitch());
    tl3.add(furtherAnimations(), 0);

    if (imgRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom +=500",
        toggleActions: "play none none none",
        animation: tl3,
      });
    }
    // if (imgRef.current) {
  });
  return (
    <section
      ref={containerRef}
      key={props.id}
      className={`project ${props.className}`}
    >
      <img ref={shapeRef} className="funkyShape" src={props.funkyShape} />
      <div ref={contentRef} className="projContentContainer">
        <figure className="projImageContainer">
          <img
            ref={imgRef}
            className="projImage"
            src={props.projectImage}
            alt={`${props.title} project image`}
          />
          <img src={props.mockup} alt={`${props.title} mockup`} />
        </figure>
        <section>
          <h2>{props.title}</h2>
          <p>{props.roles}</p>
          <Button href={`/${props.slug}`} buttonText="More" />
        </section>
      </div>
    </section>
  );
}

export default ProjectPreview;
