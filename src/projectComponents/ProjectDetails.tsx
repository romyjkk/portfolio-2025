import projectData from "../data/ProjectData";
import Button from "../components/Button";
import Link from "../components/Link";

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

      {(project.images?.[0] as any)?.emSketches && (
        <article className="imagesAndDescription">
          <article className="projectImages">
            {(project.images?.[0] as any)?.emSketches?.map(
              (emSketch: string, index: number) => {
                return (
                  <figure key={index} className="projectImage">
                    <img src={emSketch} />
                  </figure>
                );
              }
            )}
          </article>
          {(project.imageDescriptions?.[0] as any).emSketches && (
            <strong>
              {(project.imageDescriptions?.[0] as any).emSketches}
            </strong>
          )}
        </article>
      )}

      {(project.images?.[0] as any)?.oldDesign && (
        <article className="imagesAndDescription">
          <article className="bacSacProjImages">
            {(project.images?.[0] as any)?.oldDesign?.map(
              (oldDesign: string, index: number) => {
                return (
                  <figure key={index} className="projectImage">
                    <img src={oldDesign} />
                  </figure>
                );
              }
            )}
          </article>
          {(project.imageDescriptions?.[0] as any).oldDesign && (
            <strong>{(project.imageDescriptions?.[0] as any).oldDesign}</strong>
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

      {(project.images?.[0] as any)?.validation && (
        <article className="imagesAndDescription">
          <article className="singleProjectImage">
            <figure className="projectImage">
              <img src={(project.images?.[0] as any).validation} />
            </figure>
          </article>
          {(project.imageDescriptions?.[0] as any).validation && (
            <strong>
              {(project.imageDescriptions?.[0] as any).validation}
            </strong>
          )}
        </article>
      )}

      {(project.images?.[0] as any)?.wordPress && (
        <article className="imagesAndDescription">
          <article className="bacSacProjImages">
            {(project.images?.[0] as any)?.wordPress?.map(
              (wp: string, index: number) => {
                return (
                  <figure key={index} className="projectImage">
                    <img src={wp} />
                  </figure>
                );
              }
            )}
          </article>
          {(project.imageDescriptions?.[0] as any).wordPress && (
            <strong>{(project.imageDescriptions?.[0] as any).wordPress}</strong>
          )}
        </article>
      )}

      {(project.images?.[0] as any)?.scrollTrigger && (
        <article className="imagesAndDescription">
          <article className="singleProjectImage">
            <figure className="projectImage">
              <img src={(project.images?.[0] as any).scrollTrigger} />
            </figure>
          </article>
          {(project.imageDescriptions?.[0] as any).scrollTrigger && (
            <strong>
              {(project.imageDescriptions?.[0] as any).scrollTrigger}
            </strong>
          )}
        </article>
      )}

      {/* {project.challenges && (
        <article className="paragraphs challengesParagraphs">
          {project.challenges?.map((challenge: string, index: number) => {
            return <p key={index}>{challenge}</p>;
          })}
        </article>
      )} */}

      {(project.images?.[1] as any)?.emResults && (
        <article className="imagesAndDescription">
          <article className="projectImages">
            {(project.images?.[1] as any)?.emResults?.map(
              (emResult: string, index: number) => {
                return (
                  <figure key={index} className="projectImage">
                    <img src={emResult} />
                  </figure>
                );
              }
            )}
          </article>
          {(project.imageDescriptions?.[0] as any).emResults && (
            <strong>{(project.imageDescriptions?.[0] as any).emResults}</strong>
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

      {(project.images?.[1] as any)?.sent && (
        <article className="imagesAndDescription">
          <article className="horrorflixProjImages">
            {(project.images?.[1] as any)?.sent?.map(
              (sent: string, index: number) => {
                return (
                  <figure key={index} className="projectImage">
                    <img src={sent} />
                  </figure>
                );
              }
            )}
          </article>
          {(project.imageDescriptions?.[0] as any).results && (
            <strong>{(project.imageDescriptions?.[0] as any).results}</strong>
          )}
        </article>
      )}

      {(project.images?.[1] as any)?.ossResults && (
        <article className="imagesAndDescription">
          <article className="projectImages">
            {(project.images?.[1] as any)?.ossResults?.map(
              (ossResult: string, index: number) => {
                return (
                  <figure key={index} className="projectImage">
                    <img src={ossResult} />
                  </figure>
                );
              }
            )}
          </article>
          {(project.imageDescriptions?.[0] as any).ossResults && (
            <strong>
              {(project.imageDescriptions?.[0] as any).ossResults}
            </strong>
          )}
        </article>
      )}

      {(project.images?.[0] as any)?.newDesign && (
        <article className="imagesAndDescription">
          <article className="bacSacProjImages bacSacProjImagesBig">
            {(project.images?.[0] as any).newDesign?.map(
              (newDesign: string, index: number) => {
                return (
                  <figure key={index} className="projectImage veryHigh">
                    <img src={newDesign} />
                  </figure>
                );
              }
            )}
          </article>
          {(project.imageDescriptions?.[0] as any).newDesign && (
            <strong>{(project.imageDescriptions?.[0] as any).newDesign}</strong>
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
            <Link
              target="_blank"
              href={project.githubLink}
              buttonText="Github repo"
            />
          )}
          {project.liveDemo && (
            <Link
              target="_blank"
              href={project.liveDemo}
              buttonText="Live demo"
            />
          )}
          {project.file && (
            <Link
              href={project.file}
              buttonText="Download design file (Dutch)"
              download="Design Rationale"
            />
          )}
          {project.liveWebsite && (
            <Link
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
