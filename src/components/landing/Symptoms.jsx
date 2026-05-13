import { useRef } from 'react';
import './symptoms.css';
import { SymptomCard } from './SymptomCard';
import { symptomsList } from '../../constants/landingData';

export default function Symptoms() {
  const carouselRef = useRef(null);

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
          Symptoms
        </span>
        <h2 className="symptoms-title">
          Basic Symptoms of Coronavirus
        </h2>

        <div className="carousel-wrapper">
          {/* Left Arrow */}
          <button onClick={scrollLeft} className="carousel-nav-button carousel-nav-left">
             <svg className="carousel-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* Carousel Container */}
          <div ref={carouselRef} className="carousel-container">
            {symptomsList.map((item, index) => (
              <SymptomCard key={index} {...item} />
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