import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { TransitionProvider } from "./helperFunctions/TransitionContext";
import TransitionComponent from "./helperFunctions/Transition";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  MotionPathPlugin,
  MorphSVGPlugin,
  DrawSVGPlugin,
  Flip
);

function AppContent() {
  const location = useLocation();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    if (window.innerWidth > 576) {
      smootherRef.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
      });
    }

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TransitionComponent>
              <Routes location={location}>
                <Route path="/" element={<Home smootherRef={smootherRef} />} />
                <Route
                  path="/:slug"
                  element={<ProjectPage smootherRef={smootherRef} />}
                />
              </Routes>
            </TransitionComponent>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <AppContent />
      </TransitionProvider>
    </BrowserRouter>
  );
}
