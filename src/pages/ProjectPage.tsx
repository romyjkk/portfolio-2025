import ProjectData from "../data/ProjectData";
import Button from "../components/Button";
import { useParams } from "react-router";

import Hero from "../projectComponents/Hero";
import ProjectDetails from "../projectComponents/ProjectDetails";
import { useEffect } from "react";

function ProjectPage({
  smootherRef,
}: {
  smootherRef: React.RefObject<ScrollSmoother | null>;
}) {
  const { slug } = useParams();
  const project = ProjectData.find((p) => p.slug === slug);

  useEffect(() => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(0, false);
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug, smootherRef]);

  if (!project) {
    return (
      <section className="errorPage">
        <h1>404</h1>
        <p>Page not found</p>
        <Button href="/" buttonText="Go back" />
      </section>
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
