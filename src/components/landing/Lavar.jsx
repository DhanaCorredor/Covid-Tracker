import './Lavar.css';
import { WashStep } from './WashStep';

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
              <WashStep key={step.num} {...step} />
            ))}
          </div>
        </div>
    </div>
  );
};