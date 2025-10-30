import React, { useContext, useRef } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

import TransitionContext from "./TransitionContext";

const TransitionComponent = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);

  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <SwitchTransition mode="out-in">
      <Transition
        nodeRef={nodeRef}
        key={location.key ?? location.pathname}
        timeout={500}
        mountOnEnter
        unmountOnExit
        onEnter={() => {
          toggleCompleted(false);
          const node = nodeRef.current;
          if (node) {
            gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
            gsap
              .timeline({
                onComplete: () => toggleCompleted(true),
              })
              .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
              .to(node, { scale: 1, duration: 0.25 });
          }
        }}
        onExit={() => {
          const node = nodeRef.current;
          if (node) {
            gsap
              .timeline()
              .to(node, { scale: 0.8, duration: 0.2 })
              .to(node, { xPercent: 100, autoAlpha: 0, duration: 0.2 });
          }
        }}
      >
        <div ref={nodeRef} className="animationWrapper">
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
