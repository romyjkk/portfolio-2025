function IconLink({
  href,
  icon,
  alt,
}: {
  href: string;
  icon: string;
  alt: string;
}) {
  return (
    <a href={href} target="_blank">
      <img src={icon} alt={alt} />
    </a>
  );
}

export default IconLink;
