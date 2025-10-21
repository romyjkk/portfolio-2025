function Badge({ text }: { text: string }) {
  return (
    <li className="badge">
      <div className="badgeFront">
        <small>{text}</small>
      </div>
      <div className="badgeBack"></div>
    </li>
  );
}

export default Badge;
