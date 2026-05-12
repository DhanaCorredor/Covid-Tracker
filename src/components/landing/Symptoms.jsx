import { useRef } from 'react';
import './symptoms.css';

export default function Symptoms() {
  const carouselRef = useRef(null);

  const symptomsList = [
    {
      imgSrc: '/images/coronavirus.png',
      title: 'Aches and pains',
      desc: 'Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100.'
    },
    {
      imgSrc: '/images/carousel-02.svg',
      title: 'Runny nose',
      desc: 'People of all ages who experience fever and/or cough associated with difficulty breathing/shortness of breath.'
    },
    {
      imgSrc: '/images/carousel-03.svg',
      title: 'Short throat',
      desc: 'Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer.'
    },
    {
      imgSrc: '/images/carousel-01.png',
      title: 'Persistent Cough',
      desc: 'A dry, persistent cough is a very common early indicator. It usually starts mild and becomes progressively more severe over days.'
    }
  ];

  const newsData = [
    {
      date: '9 Sept 2020',
      comments: '2 Comment',
      title: 'What should I do if I have COVID-19 symptoms',
      imgSrc: '/images/news-virus.png',
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'
    },
    {
      date: '8 Sept 2020',
      comments: '20 Comment',
      title: 'What you need to know About Coronavirus',
      imgSrc: '/images/news-lab.png',
      link: 'https://www.who.int/health-topics/coronavirus'
    },
    {
      date: '7 Sept 2020',
      comments: '2 Comment',
      title: 'Seek immediate care if you have difficulty breathing',
      imgSrc: '/images/news-mask.png',
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#emergency-warning-signs'
    }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <div className="symptoms-section">
      <div className="symptoms-container">
        <span className="symptoms-subtitle">
          Symptom
        </span>
        <h2 className="symptoms-title">
          Basic Symptom Against Corona virus
        </h2>

        <div className="carousel-wrapper">
          {/* Left Arrow */}
          <button onClick={scrollLeft} className="carousel-nav-button carousel-nav-left">
             <svg className="carousel-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* Carousel Container */}
          <div ref={carouselRef} className="carousel-container">
            {symptomsList.map((item, index) => (
              <div key={index} className="carousel-item">
                <img className="carousel-item-img" alt={item.title} src={item.imgSrc} />
                <h3 className="carousel-item-title">{item.title}</h3>
                <p className="carousel-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={scrollRight} className="carousel-nav-button carousel-nav-right">
             <svg className="carousel-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
}