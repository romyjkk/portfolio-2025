import React, { useContext, useRef } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

import TransitionContext from "./TransitionContext";

const TransitionComponent = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);

  const nodeRef = useRef<HTMLDivElement | null>(null);

  if (window.innerWidth > 768) {
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
                  "--blur": 2,
                  "--brightness": 1.5,
                },
                {
                  autoAlpha: 1,
                  "--blur": 0,
                  "--brightness": 1,

                  skewX: 0,
                  duration: 1,
                  ease: "power2.out",
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
              gsap.set(node, {
                autoAlpha: 1,
                "--blur": 0,
                "--brightness": 1,
              });
              gsap
                .timeline()
                .to(node, {
                  autoAlpha: 1,
                  skewX: -5,
                  "--blur": 2,
                  "--brightness": 1.5,
                  duration: 1,
                  ease: "power2.out",
                  onUpdate: function () {
                    if (node) {
                      const blur = gsap.getProperty(node, "--blur");
                      const brightness = gsap.getProperty(node, "--brightness");
                      node.style.filter = `blur(${blur}px) brightness(${brightness})`;
                    }
                  },
                })
                .to(node, { autoAlpha: 0, duration: 1 });
            }
          }}
        >
          <div ref={nodeRef} className="animationWrapper">
            {children}
          </div>
        </Transition>
      </SwitchTransition>
    );
  } else {
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
                  "--blur": 2,
                  "--brightness": 1.5,
                },
                {
                  autoAlpha: 1,
                  "--blur": 0,
                  "--brightness": 1,
                  duration: 1,
                  ease: "power2.out",
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
              gsap.set(node, {
                autoAlpha: 1,
                "--blur": 0,
                "--brightness": 1,
              });
              gsap
                .timeline()
                .to(node, {
                  autoAlpha: 1,
                  "--blur": 2,
                  "--brightness": 1.5,
                  duration: 1,
                  ease: "power2.out",
                  onUpdate: function () {
                    if (node) {
                      const blur = gsap.getProperty(node, "--blur");
                      const brightness = gsap.getProperty(node, "--brightness");
                      node.style.filter = `blur(${blur}px) brightness(${brightness})`;
                    }
                  },
                })
                .to(node, { autoAlpha: 0, duration: 1 });
            }
          }}
        >
          <div ref={nodeRef} className="animationWrapper">
            {children}
          </div>
        </Transition>
      </SwitchTransition>
    );
  }
};

export default TransitionComponent;

/* 
I used the following example for this: React Page Transitions with GSAP - StackBlitz. (n.d.). StackBlitz. 
https://stackblitz.com/edit/react-6rzfpp?file=src%2Frouter%2FRouter.js,src%2Fcontext%2FTransitionContext.js,src%2Fcomponents%2FTransition.js,src%2Fviews%2FBoxes.js
*/
