import React from 'react';
import './fqs.css';

export const Faqs = () => {
  const faqsLeft = [
    {
      q: '01. How does COVID-19 spread?',
      a: 'Data has shown that it spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone infected with the virus.'
    },
    {
      q: '2. What are the symptoms of COVID-19?',
      a: ''
    },
    {
      q: '3. Should I wear mask?',
      a: ''
    }
  ];

  const faqsRight = [
    {
      q: '04. What does it mean to self-isolate?',
      a: ''
    },
    {
      q: '05. Can children or adolescents catch COVID-19?',
      a: ''
    },
    {
      q: '06. Is there a vaccine or drug for COVID-19?',
      a: 'While some western, traditional or home remedies may provide comfort and alleviate symptoms of mild COVID-19, there are no medicines that have been shown to prevent or cure the disease. WHO does not recommend self-medication with any medicines.'
    }
  ];

  return (
    <>
      <div className="faqs-section w-full py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              {faqsLeft.map((faq, idx) => (
                <div key={idx} className="faq-card">
                  <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                  {faq.a && <p className="text-blue-100 text-sm leading-relaxed">{faq.a}</p>}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {faqsRight.map((faq, idx) => (
                <div key={idx} className="faq-card">
                  <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                  {faq.a && <p className="text-blue-100 text-sm leading-relaxed">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-section w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6 text-white">
                <img src="/images/icon2.png" alt="logo" className="w-8 h-8 object-contain opacity-80" />
                <h2 className="text-2xl font-bold">COVIMAP</h2>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.
              </p>
              <div className="flex gap-4">
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">t</a>
                <a href="#" className="social-icon">in</a>
                <a href="#" className="social-icon">y</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6">Quick Links</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="footer-link">Prevention</a></li>
                <li><a href="#" className="footer-link">Quarantine</a></li>
                <li><a href="#" className="footer-link">About</a></li>
                <li><a href="#" className="footer-link">Help</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">About</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="footer-link">Hand Wash</a></li>
                <li><a href="#" className="footer-link">Social Distance</a></li>
                <li><a href="#" className="footer-link">Isolate</a></li>
                <li><a href="#" className="footer-link">Difference</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Help</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="footer-link">Hand Wash</a></li>
                <li><a href="#" className="footer-link">Social Distance</a></li>
                <li><a href="#" className="footer-link">Isolate</a></li>
                <li><a href="#" className="footer-link">Difference</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
