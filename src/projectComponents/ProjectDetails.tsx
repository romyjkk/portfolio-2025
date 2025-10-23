import projectData from "../data/ProjectData";
import Button from "../components/Button";

function ProjectDetails({ id }) {
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return null;
  }

  return (
    <section className="projectDetailsSection">
      {project.introParagraphs && (
        <article className="paragraphs introParagraphs">
          {project.introParagraphs?.map((intro, index) => {
            return <p key={index}>{intro}</p>;
          })}
        </article>
      )}

      {project.images?.[0]?.emSketches && (
        <article className="imagesAndDescription">
          <article className="projectImages">
            {project.images?.[0].emSketches?.map((emSketch, index) => {
              return (
                <figure key={index} className="projectImage">
                  <img src={emSketch} />
                </figure>
              );
            })}
          </article>
          <strong>Dashboard: sketch to final version</strong>
        </article>
      )}

      {project.processParagraphs && (
        <article className="paragraphs processParagraphs">
          {project.processParagraphs?.map((process, index) => {
            return <p key={index}>{process}</p>;
          })}
          {project.myWork && (
            <ul className="myWork">
              {project.myWork?.map((myWork, index) => {
                return <li key={index}>{myWork}</li>;
              })}
            </ul>
          )}
        </article>
      )}

      {project.images?.[1]?.emResults && (
        <article className="imagesAndDescription">
          <article className="projectImages">
            {project.images?.[1].emResults?.map((emResults, index) => {
              return (
                <figure key={index} className="projectImage">
                  <img src={emResults} />
                </figure>
              );
            })}
          </article>
          {project.imageDescriptions?.[0].emSketches && (
            <strong>{project.imageDescriptions?.[0].emSketches}</strong>
          )}
        </article>
      )}

      {project.images?.[0]?.scrollTrigger && (
        <article className="imagesAndDescription">
          <article className="singleProjectImage">
            <figure className="projectImage">
              <img src={project.images?.[0].scrollTrigger} />
            </figure>
          </article>
          {project.imageDescriptions?.[0].scrollTrigger && (
            <strong>{project.imageDescriptions?.[0].scrollTrigger}</strong>
          )}
        </article>
      )}

      {project.challenges && (
        <article className="paragraphs challengesParagraphs">
          {project.challenges?.map((challenge, index) => {
            return <p key={index}>{challenge}</p>;
          })}
        </article>
      )}

      {project.conclusionParagraphs && (
        <article className="paragraphs conclusionParagraphs">
          {project.conclusionParagraphs?.map((conclusion, index) => {
            return <p key={index}>{conclusion}</p>;
          })}
        </article>
      )}

      {project.images?.[1]?.ossResults && (
        <article className="imagesAndDescription">
          <article className="projectImages">
            {project.images?.[1].ossResults?.map((ossResult, index) => {
              return (
                <figure key={index} className="projectImage">
                  <img src={ossResult} />
                </figure>
              );
            })}
          </article>
          {project.imageDescriptions?.[0].ossResults && (
            <strong>{project.imageDescriptions?.[0].ossResults}</strong>
          )}
        </article>
      )}

      <article className="scrollIndicator">
        <strong>Demonstration video</strong>
        <div className="arrows"></div>
      </article>

      {project.demonstrationVideo && (
        <article className="demonstrationVideoContainer">
          <div className="tvShape"></div>
          <figure className="videoFrame">
            <img src={project.demonstrationVideo} />
          </figure>
        </article>
      )}

      {(project.githubLink || project.liveDemo) && (
        <article className="buttonContainer">
          {project.githubLink && (
            <Button
              target="_blank"
              href={project.githubLink}
              buttonText="Github repo"
            />
          )}
          {project.liveDemo && (
            <Button
              target="_blank"
              href={project.liveDemo}
              buttonText="Live demo"
            />
          )}
        </article>
      )}
    </section>
  );
}

export default ProjectDetails;
