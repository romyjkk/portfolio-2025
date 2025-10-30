import { gsap } from "gsap";

import Button from "./Button";
import logo from "/logo.svg";
import { Link, useLocation, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (target: string) => {
    if (location.pathname === "/") {
      const section = document.querySelector(target);
      if (section) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, offsetY: 0 },
          ease: "power2.out",
        });
      }
    } else {
      navigate("/", { state: { scrollTarget: target } });
    }
  };

  return (
    <header className="pageHeaderOne">
      <nav className="headerContainer">
        <Link to="/">
          <img src={logo} alt="My logo" />
        </Link>
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
