import projectData from "../data/ProjectData";
import Button from "../components/Button";

function ProjectDetails({ id }: { id: string }) {
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
          {project.imageDescriptions?.[0].emSketches && (
            <strong>{project.imageDescriptions?.[0].emSketches}</strong>
          )}
        </article>
      )}

      {project.images?.[0]?.oldDesign && (
        <article className="imagesAndDescription">
          <article className="bacSacProjImages">
            {project.images?.[0]?.oldDesign?.map((oldDesign, index) => {
              return (
                <figure key={index} className="projectImage">
                  <img src={oldDesign} />
                </figure>
              );
            })}
          </article>
          {project.imageDescriptions?.[0].oldDesign && (
            <strong>{project.imageDescriptions?.[0].oldDesign}</strong>
          )}
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

      {project.images?.[0]?.validation && (
        <article className="imagesAndDescription">
          <article className="singleProjectImage">
            <figure className="projectImage">
              <img src={project.images?.[0].validation} />
            </figure>
          </article>
          {project.imageDescriptions?.[0].validation && (
            <strong>{project.imageDescriptions?.[0].validation}</strong>
          )}
        </article>
      )}

      {project.images?.[0]?.wordPress && (
        <article className="imagesAndDescription">
          <article className="bacSacProjImages">
            {project.images?.[0]?.wordPress?.map((wp, index) => {
              return (
                <figure key={index} className="projectImage">
                  <img src={wp} />
                </figure>
              );
            })}
          </article>
          {project.imageDescriptions?.[0].wordPress && (
            <strong>{project.imageDescriptions?.[0].wordPress}</strong>
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

      {project.images?.[1]?.emResults && (
        <article className="imagesAndDescription">
          <article className="projectImages">
            {project.images?.[1]?.emResults?.map((emResult, index) => {
              return (
                <figure key={index} className="projectImage">
                  <img src={emResult} />
                </figure>
              );
            })}
          </article>
          {project.imageDescriptions?.[0].emResults && (
            <strong>{project.imageDescriptions?.[0].emResults}</strong>
          )}
        </article>
      )}

      {project.conclusionParagraphs && (
        <article className="paragraphs conclusionParagraphs">
          {project.conclusionParagraphs?.map((conclusion, index) => {
            return <p key={index}>{conclusion}</p>;
          })}
        </article>
      )}

      {project.images?.[1]?.sent && (
        <article className="imagesAndDescription">
          <article className="horrorflixProjImages">
            {project.images?.[1].sent?.map((sent, index) => {
              return (
                <figure key={index} className="projectImage">
                  <img src={sent} />
                </figure>
              );
            })}
          </article>
          {project.imageDescriptions?.[0].results && (
            <strong>{project.imageDescriptions?.[0].results}</strong>
          )}
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

      {project.images?.[0]?.newDesign && (
        <article className="imagesAndDescription">
          <article className="bacSacProjImages bacSacProjImagesBig">
            {project.images?.[0].newDesign?.map((newDesign, index) => {
              return (
                <figure key={index} className="projectImage veryHigh">
                  <img src={newDesign} />
                </figure>
              );
            })}
          </article>
          {project.imageDescriptions?.[0].newDesign && (
            <strong>{project.imageDescriptions?.[0].newDesign}</strong>
          )}
        </article>
      )}

      {project.demonstrationVideo && (
        <>
          <article className="scrollIndicator">
            <strong>Demonstration video</strong>
            <div className="arrows"></div>
          </article>

          <article className="demonstrationVideoContainer">
            <div className="tvShape"></div>
            <figure className="videoFrame">
              <video muted loop autoPlay>
                <source src={project.demonstrationVideo} type="video/mp4" />
              </video>
              {/* <img src={project.demonstrationVideo} /> */}
            </figure>
          </article>
        </>
      )}

      {(project.githubLink ||
        project.liveDemo ||
        project.file ||
        project.liveWebsite) && (
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
          {project.file && (
            <Button
              href={project.file}
              buttonText="Download design file (Dutch)"
              download="Design Rationale"
            />
          )}
          {project.liveWebsite && (
            <Button
              target="_blank"
              href={project.liveWebsite}
              buttonText="Live website"
            />
          )}
        </article>
      )}
    </section>
  );
}

export default ProjectDetails;
