import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col-1">
            <div className="footer-logo-container">
              <img src="/images/covid-blue.svg" alt="logo" className="footer-logo-img" />
              <h2 className="footer-logo-text">COVIMAP</h2>
            </div>
            <p className="footer-desc">
              These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">t</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">y</a>
            </div>
          </div>
          
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">Prevention</a></li>
              <li><a href="#" className="footer-link">Quarantine</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Help</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">About</h3>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">Hand Wash</a></li>
              <li><a href="#" className="footer-link">Social Distance</a></li>
              <li><a href="#" className="footer-link">Isolate</a></li>
              <li><a href="#" className="footer-link">Difference</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Help</h3>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">Hand Wash</a></li>
              <li><a href="#" className="footer-link">Social Distance</a></li>
              <li><a href="#" className="footer-link">Isolate</a></li>
              <li><a href="#" className="footer-link">Difference</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
