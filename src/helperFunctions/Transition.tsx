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
            gsap.fromTo(
              node,
              {
                autoAlpha: 0,
                skewX: 5,
                "--blur": 1,
                "--brightness": 1.5,
              },
              {
                autoAlpha: 1,
                "--blur": 0,
                "--brightness": 1,
                skewX: 0,
                duration: 1,
                onUpdate: function () {
                  if (node) {
                    const blur = gsap.getProperty(node, "--blur");
                    const brightness = gsap.getProperty(node, "--brightness");
                    node.style.filter = `blur(${blur}px) brightness(${brightness})`;
                  }
                },
                onComplete: () => toggleCompleted(true),
              }
            );
          }
        }}
        onExit={() => {
          const node = nodeRef.current;
          if (node) {
            gsap
              .timeline()
              .to(node, {
                autoAlpha: 1,
                skewX: -5,
                "--blur": 1,
                "--brightness": 1.5,
                duration: 0.5,
                ease: "power2.out",
                onUpdate: function () {
                  if (node) {
                    const blur = gsap.getProperty(node, "--blur");
                    const brightness = gsap.getProperty(node, "--brightness");
                    node.style.filter = `blur(${blur}px) brightness(${brightness})`;
                  }
                },
              })
              .to(node, { autoAlpha: 0, duration: 0.5 });
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
