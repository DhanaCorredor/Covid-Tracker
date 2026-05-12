import './Lavar.css';

export const Lavar = ({ steps }) => {
  return (
    <div className="lavar-section">
        <div className="lavar-container">
          <span className="lavar-subtitle">
            Wash
          </span>
          <h2 className="lavar-title">
            Wash Your Hands min 20 Second
          </h2>

          <div className="lavar-grid">
            {steps && steps.map((step) => (
              <div key={step.num} className="lavar-step">
                <div className="lavar-step-circle">
                  <div className="lavar-step-number">{step.num}</div>
                  <img src={step.imgSrc} alt={step.title} className="lavar-step-img" />
                </div>
                <h3 className="lavar-step-title">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};