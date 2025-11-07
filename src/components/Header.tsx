import { gsap } from "gsap";
import { Link, useLocation, useNavigate } from "react-router";

import Button from "./Button";
import logo from "/logo.svg";

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
