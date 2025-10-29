import Badge from "./Badge";
import projectData from "../data/ProjectData";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

function Hero({ id }: { id: string }) {
  const project = projectData.find((p) => p.id === id);

  useGSAP(() => {
    const state = Flip.getState(".projImageContainer img", {
      props: "transform",
    });

    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 1,
        ease: "power1.inOut",
        absolute: true,
        scale: true,
      });
    });
  }, [id]);

  if (!project) {
    return null;
  }

  return (
    <section className="heroSection">
      <img className="funkyShape" src="/shapesAndBorders/funkyShape.svg" />
      <figure className="projImageContainer">
        <img src={project.projectImage} />
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
