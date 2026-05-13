import { useState } from 'react';
import './Faqs.css';
import { FaqItem } from './FaqItem';
import { allFaqs } from '../../constants/landingData';

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="faqs-section">
      <div className="faqs-header">
        <span className="faqs-subtitle">
          FAQ
        </span>
        <h2 className="faqs-title">
          Frequently Asked Questions
        </h2>
      </div>
      
      <div className="faqs-container">
        <div className="faqs-list">
          {allFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FaqItem 
                key={idx} 
                q={faq.q} 
                a={faq.a} 
                isOpen={isOpen} 
                onClick={() => toggleFaq(idx)} 
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
