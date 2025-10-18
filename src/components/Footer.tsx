import IconLink from "./IconLink";
import github from "/github.svg";
import linkedin from "/linkedin.svg";

function Footer() {
  // const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        <li>
          <IconLink
            href="https://www.linkedin.com/in/romy-jongkees-274b97210/"
            icon={linkedin}
            alt="Linkedin logo"
          />
        </li>
        <li>
          <IconLink
            href="https://github.com/romyjkk"
            icon={github}
            alt="Github logo"
          />
        </li>
      </ul>
      <small>Built using React & GSAP, by Romy</small>
    </footer>
  );
}

export default Footer;
