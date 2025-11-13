import { gsap } from "gsap";

import portrait from "/portrait.webp";
import matrixifiedPortrait from "/portraitMatrixified.webp";
import matrixifiedGlitch1 from "/glitch/glitch1.webp";
import matrixifiedGlitch2 from "/glitch/glitch2.webp";
import matrixifiedGlitch3 from "/glitch/glitch3.webp";
import matrixifiedGlitch4 from "/glitch/glitch4.webp";

function IntroductionCard() {
  const glitchEffect = () => {
    const glitches = [
      matrixifiedGlitch1,
      matrixifiedGlitch2,
      matrixifiedGlitch3,
      matrixifiedGlitch4,
    ];

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    const glitchImage = document.querySelector(".glitchImage");
    if (glitchImage) {
      tl.set(glitchImage, { attr: { src: matrixifiedPortrait } });

      tl.add(() => {
        const burst = gsap.timeline();
        glitches.forEach((img, i) => {
          burst.set(glitchImage, { attr: { src: img } }, i * 0.05);
        });
        burst.set(
          glitchImage,
          { attr: { src: matrixifiedPortrait } },
          "+=0.05"
        );
      });
    }
  };

  return (
    <div className="introductionCardContainer">
      <section className="introductionCard">
        <div
          className="introductionCardInner"
          onMouseOver={() => glitchEffect()}
        >
          <div className="introductionCardFront">
            <div>
              <section>
                <div className="portraitContainer">
                  <figure>
                    <img src={portrait} alt="Portrait of me" />
                  </figure>
                </div>
                <header className="introduction">
                  <h1>Romy, level 23</h1>
                  <p>
                    A <strong>front-end developer</strong> with a passion for
                    creativity. Recently graduated with a BSc in Communication &
                    Multimedia Design at the Amsterdam University of Applied
                    Sciences (HvA).
                  </p>
                  <div>
                    <p>
                      <strong>Scroll for more</strong>
                    </p>
                    <div className="arrows"></div>
                  </div>
                </header>
              </section>
            </div>
          </div>

          <div className="introductionCardBack">
            <div>
              <section>
                <div className="portraitContainer">
                  <figure>
                    <img
                      className="glitchImage"
                      src={matrixifiedPortrait}
                      alt="Portrait of me"
                    />
                  </figure>
                </div>
                <header className="introduction">
                  <h1>Romy, level 23</h1>
                  <p>
                    A <strong>front-end developer</strong> with a passion for
                    creativity. Recently graduated with a BSc in Communication &
                    Multimedia Design at the Amsterdam University of Applied
                    Sciences (HvA).
                    {/* Matrix me: Took the red pill without a second of hesitation, turned
                      out to be an agile and fearless fighter. */}
                  </p>
                  <div>
                    <p>
                      <strong>Scroll for more</strong>
                    </p>
                    <div className="arrows"></div>
                  </div>
                </header>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroductionCard;
