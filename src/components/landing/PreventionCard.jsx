export const PreventionCard = ({ imgSrc, imgAlt, title, text, imgClass = "prevention-icon" }) => {
  return (
    <div className="prevention-item flex items-start gap-6">
      <div className="hexagon-container flex-none">
        <img className={imgClass} alt={imgAlt || title} src={imgSrc} />
      </div>
      <div>
        <h3 className="prevention-item-title">{title}</h3>
        <p className="prevention-item-text">{text}</p>
      </div>
    </div>
  );
};
