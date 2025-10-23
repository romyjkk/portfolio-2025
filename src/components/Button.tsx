function Button({
  onClick,
  href,
  buttonText,
  target,
}: {
  onClick?: () => void;
  href?: string;
  buttonText: string;
  target?: string;
}) {
  return (
    <a target={target} className="button" href={href}>
      <div onClick={onClick} className="buttonFront">
        <p>{buttonText}</p>
      </div>
      <div className="buttonBack"></div>
    </a>
  );
}

export default Button;
