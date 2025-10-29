import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import { useLocation } from "react-router";

export default function PageTransitions({
  children,
}: {
  children: React.ReactNode;
}) {
  const animationContainer = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = animationContainer.current;
    if (!el) return;
    const tl = gsap.timeline();
    tl.fromTo(
      animationContainer.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1 },
      0
    );
    const glitch = gsap.timeline();
    glitch
      .to(animationContainer.current, { x: 6, y: -5, duration: 0.1 })
      .to(animationContainer.current, { x: -6, y: 5, duration: 0.1 })
      .to(animationContainer.current, { x: 0, y: 0, duration: 0.1 });
    tl.add(glitch, 0.2);
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div ref={animationContainer} className="pageTransitionContainer">
      {" "}
      {children}{" "}
    </div>
  );
}
