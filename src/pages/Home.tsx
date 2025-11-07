import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import IntroductionCard from "../components/IntroductionCard";
import ProjectPreviews from "../components/ProjectPreviews";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

function Home({
  smootherRef,
}: {
  smootherRef: React.RefObject<ScrollSmoother | null>;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useGSAP(() => {
    const state = location.state as { scrollTarget?: string } | null;

    setTimeout(() => {
      ScrollTrigger.refresh();

      if (state?.scrollTarget) {
        setTimeout(() => {
          const section = document.querySelector(state.scrollTarget as string);
          if (section) {
            if (smootherRef.current) {
              smootherRef.current.scrollTo(section, true, "top top");
            } else {
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: section, offsetY: 0 },
                ease: "power2.out",
              });
            }
          }
        }, 100);
      }
    }, 500);
  }, [location, smootherRef]);

  return (
    <div className="homePageWrapper" ref={wrapperRef}>
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
