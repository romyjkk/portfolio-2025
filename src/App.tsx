import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
// gsap.registerPlugin(useRef, useLayoutEffect);

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import EscapeManager from "./pages/EscapeManager";
// import OurSolarSystem from "./pages/OurSolarSystem";
// import BacSac from "./pages/BacSac";
// import Horrorflix from "./pages/Horrorflix";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
    });
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
              {/* <Route path="/escape-manager" element={<EscapeManager />} />
              <Route path="/our-solar-system" element={<OurSolarSystem />} />
              <Route path="/bac-sac" element={<BacSac />} />
              <Route path="/horrorflix" element={<Horrorflix />} /> */}
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

// export default App;
