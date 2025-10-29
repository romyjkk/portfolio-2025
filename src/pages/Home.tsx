import IntroductionCard from "../components/IntroductionCard";
import ProjectPreviews from "../components/ProjectPreviews";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Home() {
  const location = useLocation();

  useGSAP(() => {
    const state = location.state as { scrollTarget?: string } | null;
    if (state?.scrollTarget) {
      const section = document.querySelector(state.scrollTarget);
      if (section) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: section, offsetY: 0 },
          ease: "power2.out",
        });
      }
    }
  }, [location]);
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
