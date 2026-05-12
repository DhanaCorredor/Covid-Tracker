import './Prevention.css';
import { PreventionCard } from './PreventionCard';
import { preventionData } from '../../constants/landingData';

export default function Prevention() {
  return (
    <div className="prevention-section">
      <div className="prevention-container">
        <span className="prevention-subtitle">
          Prevention
        </span>
        <h2 className="prevention-title">
          The best way to prevent is to avoid the virus.
        </h2>

      <div className="prevention-content">
        <div className="prevention-grid">
          {preventionData.map((item, index) => (
            <PreventionCard key={index} {...item} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}