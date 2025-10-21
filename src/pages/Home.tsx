import IntroductionCard from "../components/IntroductionCard";
import ProjectPreviews from "../components/ProjectPreviews";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

function Home() {
  return (
    <div className="homePageWrapper">
      <IntroductionCard />
      <ProjectPreviews />
      <section id="wrapper">
        <AboutMe />
        <Experience />
      </section>
    </div>
  );
}

export default Home;
