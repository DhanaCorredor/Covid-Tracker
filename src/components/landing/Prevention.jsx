import './prevention.css';

export default function Prevention() {
  const steps = [
    { num: 1, title: 'Water and soap', imgSrc: '/images/wash-01.png' },
    { num: 2, title: 'Palm to palm', imgSrc: '/images/wash-02.png' },
    { num: 3, title: 'Between fingers', imgSrc: '/images/wash-03.png' },
    { num: 4, title: 'Focus on thumbs', imgSrc: '/images/wash-04.png' },
    { num: 5, title: 'Back of hands', imgSrc: '/images/wash-05.png' },
    { num: 6, title: 'Focus on wrists', imgSrc: '/images/wash-06.png' },
  ];

  return (
    <div className="prevention-section">
      <div className="prevention-container">
        <span className="prevention-subtitle">
          Prevent
        </span>
        <h2 className="prevention-title">
          Best way to prevent is avoid virus.
        </h2>

      <div className="prevention-content">
        <div className="prevention-grid">
          <div className="prevention-item">
            <img className="prevention-icon" alt="Mujer estornudando" src="/images/carousel-01.png"/>
            <div>
              <h3 className="prevention-item-title">Personal Contact</h3>
              <p className="prevention-item-text">Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100</p>
            </div>
          </div>
          <div className="prevention-item">
            <img className="prevention-icon" alt="" src="/images/icon5.png"/>
            <div>
              <h3 className="prevention-item-title">Social distancing</h3>
              <p className="prevention-item-text">Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.</p>
            </div>
          </div>
          <div className="prevention-item">
            <img className="prevention-icon" alt="" src="/images/icon6.png" />
            <div>
              <h3 className="prevention-item-title">Clean And Disinfect</h3>
              <p className="prevention-item-text">Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100.</p>
            </div>
          </div>
          <div className="prevention-item">
            <img className="prevention-icon bg-white-icon" alt="" src="/images/wash-01.png" />
            <div>
              <h3 className="prevention-item-title">Wash hands</h3>
              <p className="prevention-item-text">Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.</p>
            </div>
          </div>
          <div className="prevention-item">
            <img className="prevention-icon" alt="Pulmones" src="/images/carousel-03.svg" />
            <div>
              <h3 className="prevention-item-title">Respiratory hygiene</h3>
              <p className="prevention-item-text">Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.</p>
            </div>
          </div>
          <div className="prevention-item">
            <img className="prevention-icon" alt="" src="/images/carousel-02.svg" />
            <div>
              <h3 className="prevention-item-title">Wear a Facemask</h3>
              <p className="prevention-item-text">Our comprehensive Online Marketing strategy will boost your website traffic hence monthly sales.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}