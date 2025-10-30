import Badge from "./Badge";
import projectData from "../data/ProjectData";

function Hero({ id }: { id: string }) {
  const project = projectData.find((p) => p.id === id);

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
