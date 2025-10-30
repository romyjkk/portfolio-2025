function Link({
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
  return (
    <a
      download={download}
      target={target}
      className="button"
      onClick={onClick}
      href={href}
    >
      <div className="buttonFront">
        <p>{buttonText}</p>
      </div>
      <div className="buttonBack"></div>
    </a>
  );
}

export default Link;
