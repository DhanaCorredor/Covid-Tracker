export const SymptomCard = ({ title, imgSrc, desc }) => {
  return (
    <div className="carousel-item bg-neutral-0 rounded-2xl shadow-md border border-neutral-100 p-6 flex flex-col items-center">
      <img className="w-32 h-32 object-contain mb-6" alt={title} src={imgSrc} />
      <h3 className="carousel-item-title">{title}</h3>
      <p className="carousel-item-desc">{desc}</p>
    </div>
  );
};
