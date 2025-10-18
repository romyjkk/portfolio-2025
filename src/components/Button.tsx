function Button({
  onClick,
  href,
  buttonText,
}: {
  onClick?: () => void;
  href?: string;
  buttonText: string;
}) {
  return (
    <a className="button" href={href}>
      <div onClick={onClick} className="buttonFront">
        <p>{buttonText}</p>
      </div>
      <div className="buttonBack"></div>
    </a>
  );
}

export default Button;
