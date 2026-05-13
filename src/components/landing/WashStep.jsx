export const WashStep = ({ num, title, imgSrc }) => {
  return (
    <div className="lavar-step">
      <div className="lavar-step-circle">
        <div className="lavar-step-number">{num}</div>
        <img src={imgSrc} alt={title} className="lavar-step-img" />
      </div>
      <h3 className="lavar-step-title">{title}</h3>
    </div>
  );
};
