import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  MotionPathPlugin,
  MorphSVGPlugin,
  DrawSVGPlugin,
  Flip
);
// ScrollTrigger.config({ ignoreMobileResize: true });

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  useLayoutEffect(() => {
    const isDesktop = window.innerWidth > 576;

    if (isDesktop) {
      ScrollTrigger.defaults({ scroller: "#smooth-content" });
      ScrollSmoother.create({
        smooth: 1,
        content: "#smooth-content",
        wrapper: "#smooth-wrapper",
      });
    } else {
      ScrollTrigger.defaults({ scroller: window });
    }

    ScrollTrigger.config({ ignoreMobileResize: true });
    ScrollTrigger.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:slug" element={<ProjectPage />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

// export default App;
