import { useNavigate } from "react-router-dom";

function Button({
  onClick,
  href,
  buttonText,
  target,
  download,
}: {
  onClick?: () => void;
  href?: string;
  buttonText: string;
  target?: string;
  download?: string;
}) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    } else if (href) {
      navigate(href);
    }
  };

  return (
    <button
      // download={download}
      // target={target}
      className="button"
      onClick={handleClick}
      // href={href}
    >
      <div className="buttonFront">
        <p>{buttonText}</p>
      </div>
      <div className="buttonBack"></div>
    </button>
  );
}

export default Button;
