import React from 'react';
import './symptoms.css';

export default function Symptoms() {
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Symptom
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-16 leading-tight max-w-3xl mx-auto">
            Basic Symptom Against Corona virus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <img className="w-48 h-48 object-contain mb-6 shadow-xl rounded-full" alt="" src="/images/coronavirus.png" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Aches and pains</h3>
              <p className="text-slate-600">Fever is a key symtom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100.</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-48 h-48 object-contain mb-6" alt="" src="/images/carousel-02.svg"/>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Runny nose</h3>
              <p className="text-slate-600">Peaple of all ages who experience fever and/or cough associated with difficultly breathing/shortness of breath.</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-48 h-48 object-contain mb-6" alt="" src="/images/carousel-03.svg" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Short throat</h3>
              <p className="text-slate-600">Older people, and those with understying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer.</p>
            </div>
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