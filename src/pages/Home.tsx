import IntroductionCard from "../components/IntroductionCard";
import ProjectPreviews from "../components/ProjectPreviews";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

function Home({
  smootherRef,
}: {
  smootherRef: React.RefObject<ScrollSmoother>;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useGSAP(() => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(0, false);
    } else {
      window.scrollTo(0, 0);
    }

    const state = location.state as { scrollTarget?: string } | null;

    // Wacht tot de layout volledig is berekend
    setTimeout(() => {
      // Refresh ScrollTriggers na layout berekening
      ScrollTrigger.refresh();

      // Scroll naar de sectie als er een target is
      if (state?.scrollTarget) {
        setTimeout(() => {
          const section = document.querySelector(state.scrollTarget);
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
