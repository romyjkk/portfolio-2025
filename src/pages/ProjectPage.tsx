import { Children } from "react";
import ProjectData from "../data/ProjectData";
import Button from "../components/Button";
import { useParams } from "react-router";

import Hero from "../projectComponents/Hero";
import ProjectDetails from "../projectComponents/ProjectDetails";

function ProjectPage() {
  const { slug } = useParams();
  const project = ProjectData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <h1>Project not found</h1>;
        <Button href="/" buttonText="Go back" />
      </>
    );
  }

  return (
    <div className={`projectPageWrapper ${project.id}`}>
      <Hero key={project.id} {...project} />
      <ProjectDetails {...project} />
    </div>
  );
}

export default ProjectPage;
