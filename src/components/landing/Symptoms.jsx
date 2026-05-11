import React, { useRef } from 'react';
import './symptoms.css';

export default function Symptoms() {
  const carouselRef = useRef(null);

  const symptomsList = [
    {
      imgSrc: '/images/coronavirus.png',
      title: 'Aches and pains',
      desc: 'Fever is a key symtom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100.'
    },
    {
      imgSrc: '/images/carousel-02.svg',
      title: 'Runny nose',
      desc: 'Peaple of all ages who experience fever and/or cough associated with difficultly breathing/shortness of breath.'
    },
    {
      imgSrc: '/images/carousel-03.svg',
      title: 'Short throat',
      desc: 'Older people, and those with understying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer.'
    },
    {
      imgSrc: '/images/carousel-01.png',
      title: 'Persistent Cough',
      desc: 'A dry, persistent cough is a very common early indicator. It usually starts mild and becomes progressively more severe over days.'
    }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  const newsData = [
    {
      date: '9 Sept 2020',
      comments: '2 Comment',
      title: 'What should I do if I have COVID-19 symptoms',
      imgSrc: '/images/carousel-01.png',
    },
    {
      date: '8 Sept 2020',
      comments: '20 Comment',
      title: 'What you need to know About Coronavirus',
      imgSrc: '/images/coronavirus.png',
    },
    {
      date: '7 Sept 2020',
      comments: '2 Comment',
      title: 'Seek immediate care if you have difficulty breathing',
      imgSrc: '/images/hands_hero.png',
    }
  ];

  return (
    <>
      <div className="w-full bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative">
          <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Symptom
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-16 leading-tight max-w-3xl mx-auto">
            Basic Symptom Against Corona virus
          </h2>

          <div className="relative w-full px-2 md:px-12 group">
            {/* Left Arrow */}
            <button onClick={scrollLeft} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white shadow-lg rounded-full text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none border border-slate-100">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Carousel Container */}
            <div ref={carouselRef} className="flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 w-full py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {symptomsList.map((item, index) => (
                <div key={index} className="flex-none w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
                  <img className="w-48 h-48 object-contain mb-6 drop-shadow-xl" alt={item.title} src={item.imgSrc} />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-center leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button onClick={scrollRight} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white shadow-lg rounded-full text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none border border-slate-100">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((item, index) => (
              <div key={index} className="news-card bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col shadow-sm">
                <div className="h-64 w-full relative">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                      {item.comments}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex-grow leading-tight">
                    {item.title}
                  </h3>
                  <a href="#" className="text-blue-600 font-bold hover:text-blue-800 transition-colors inline-block mt-auto uppercase text-sm tracking-wide">
                    Continue
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}