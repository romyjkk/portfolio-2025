// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

import ProjectPreview from "./ProjectPreview";
import { projects } from "../data/ProjectData";

function ProjectPreviews() {
  return (
    <section className="projectContainer" id="projectContainer">
      <section className="projects">
        {projects.map((project) => {
          return <ProjectPreview key={project.id} {...project} />;
        })}
      </section>
    </section>
  );
}

export default ProjectPreviews;
