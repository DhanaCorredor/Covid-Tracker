import './Download.css';

export const Download = () => {
  return (
    <>
      {/* App Banner (Image 4) */}
      <div className="download-section">
        <div className="download-banner">
          <div className="download-text-container">
            <h2 className="download-title">
              Get the simple app for latest news
            </h2>
            <p className="download-subtitle">
              Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.
            </p>
            <a 
              href="https://covid-tracker-olive.vercel.app/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              DOWNLOAD NOW
            </a>
          </div>
          {/* Mockup Placeholder */}
          <div className="download-image-container">
            <img src="/images/phone_mockup.webp" className="download-image" alt="App Mockup" />
          </div>
        </div>
      </div>
    </>
  );
};