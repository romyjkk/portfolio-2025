import { gsap } from "gsap";

import portrait from "/portrait.png";
import matrixifiedPortrait from "/portraitMatrixified.jpg";
import matrixifiedGlitch1 from "/glitch/glitch1.png";
import matrixifiedGlitch2 from "/glitch/glitch2.png";
import matrixifiedGlitch3 from "/glitch/glitch3.png";
import matrixifiedGlitch4 from "/glitch/glitch4.png";

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
                    creativity. Recently graduated from Communication &
                    Multimedia Design at HvA.
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
                    creativity. Recently graduated from Communication &
                    Multimedia Design at HvA.
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
