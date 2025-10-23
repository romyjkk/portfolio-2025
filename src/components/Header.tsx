import { gsap } from "gsap";

import Button from "./Button";
import logo from "/logo.svg";

function Header() {
  const scrollToSection = (target: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: target },
    });
  };
  return (
    <header className="pageHeaderOne">
      <nav className="headerContainer">
        <a href="/">
          <img src={logo} alt="My logo" />
        </a>
        <nav>
          <Button
            buttonText="Work"
            onClick={() => scrollToSection("#projectContainer")}
          />
          <Button
            buttonText="About"
            onClick={() => scrollToSection("#aboutMeContainer")}
          />
        </nav>
      </nav>
    </header>
  );
}

export default Header;

// header version 2
// <header class="pageHeaderTwo">
//   <div class="wrapper">
//     <nav class="headerContainer">
//       <figure>
//         <img src="src/logoRomy.svg" alt="Logo" />
//       </figure>
//       <nav>
//         <a class="button" href="#">
//           <div class="buttonFront">Work</div>
//           <div class="buttonBack"></div>
//         </a>
//         <a class="button" href="#">
//           <div class="buttonFront">About</div>
//           <div class="buttonBack"></div>
//         </a>
//       </nav>
//     </nav>
//   </div>
// </header>
