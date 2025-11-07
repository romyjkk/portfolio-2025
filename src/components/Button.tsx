import { useNavigate } from "react-router-dom";

function Button({
  onClick,
  href,
  buttonText,
}: {
  onClick?: () => void;
  href?: string;
  buttonText: string;
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
    <button className="button" onClick={handleClick}>
      <div className="buttonFront">
        <p>{buttonText}</p>
      </div>
      <div className="buttonBack"></div>
    </button>
  );
}

export default Button;
