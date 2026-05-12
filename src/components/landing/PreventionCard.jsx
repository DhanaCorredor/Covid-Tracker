export const PreventionCard = ({ imgSrc, imgAlt, title, text, imgClass = "prevention-icon" }) => {
  return (
    <div className="prevention-item">
      <img className={imgClass} alt={imgAlt || title} src={imgSrc} />
      <div>
        <h3 className="prevention-item-title">{title}</h3>
        <p className="prevention-item-text">{text}</p>
      </div>
    </div>
  );
};
