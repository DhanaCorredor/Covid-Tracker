import './Header.css';

export const Header = () => {
  return (
    
    <div className="header-container">
      <div className="header-background">
        {/* Navbar Placeholder */}
        <nav className="navbar">
          <div className="navbar-logo-container">
            <img src="/images/covid-blue.svg" alt="logo" className="navbar-logo-img" />
            <h1 className="navbar-logo-text">COVIMAP</h1>
          </div>
          <div className="navbar-links">
            <a href="#" className="navbar-link">Home</a>
            <a href="#" className="navbar-link">Prevention</a>
            <a href="#" className="navbar-link">Quarantine</a>
            <a href="#" className="navbar-link">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text-container">
            <h1 className="hero-title">
              Stay Home, And Prayer For Victim Of Corona virus.
            </h1>
            <h2 className="hero-subtitle">
              Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.
            </h2>
            <div className="hero-stats">
              <div className="stat-card red">
                <span className="stat-number red">9,779,130</span>
                <span className="stat-label">Total Cases</span>
              </div>
              <div className="stat-card green">
                <span className="stat-number green">92,966</span>
                <span className="stat-label">Total Recovered</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
               <img src="/images/header.png" alt="Hero Illustration" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};