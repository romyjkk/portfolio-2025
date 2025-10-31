import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Badge from "./Badge";
import projectData from "../data/ProjectData";

function Hero({ id }: { id: string }) {
  const project = projectData.find((p) => p.id === id);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    if (!project || !imgRef.current) return;

    const glitchSet = project.images.find((imgObj) => imgObj.glitch)?.glitch;

    if (!glitchSet || glitchSet.length === 0) return;

    const makeGlitch = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    makeGlitch.set(imgRef.current, { attr: { src: project.projectImage } });
    makeGlitch.add(() => {
      const burst = gsap.timeline();
      glitchSet.forEach((glitchImg, i) => {
        burst.set(imgRef.current, { attr: { src: glitchImg } }, i * 0.05);
      });
      burst.set(
        imgRef.current,
        { attr: { src: project.projectImage } },
        "+=0.05"
      );
    });

    return () => makeGlitch.kill();
  }, [project]);

  if (!project) {
    return null;
  }

  return (
    <section className="heroSection">
      <img className="funkyShape" src="/shapesAndBorders/funkyShape.svg" />
      <figure className="projImageContainer">
        <img ref={imgRef} src={project.projectImage} />
        <img src={project.mockup} />
      </figure>
      <section className="projMetaData">
        <div className="container">
          <h1>{project.title}</h1>
          <p>
            {project.runtime} | {project.client}
          </p>
          <ul className="roles">
            {project.roles.map((role, index) => {
              return <Badge key={index} text={role} />;
            })}
          </ul>
        </div>
        <p className="projDescription">{project.description}</p>
      </section>
    </section>
  );
}

export default Hero;
