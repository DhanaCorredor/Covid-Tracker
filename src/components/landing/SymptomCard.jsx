export const SymptomCard = ({ title, imgSrc, desc }) => {
  return (
    <div className="carousel-item">
      <div className="hexagon-container">
        <img className="carousel-item-img" alt={title} src={imgSrc} />
      </div>
      <h3 className="carousel-item-title">{title}</h3>
      <p className="carousel-item-desc">{desc}</p>
    </div>
  );
};
