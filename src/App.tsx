import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  MotionPathPlugin,
  MorphSVGPlugin,
  DrawSVGPlugin
);
gsap.registerPlugin(useRef, useLayoutEffect);

import Header from "./components/Header";
import IntroductionCard from "./components/IntroductionCard";
import ProjectPreviews from "./components/ProjectPreviews";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
    });
  }, []);
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="homePage" id="smooth-wrapper">
            <div className="homePageWrapper">
              <IntroductionCard />
              <ProjectPreviews />
              <section id="wrapper">
                <AboutMe />
                <Experience />
              </section>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

// export default App;
