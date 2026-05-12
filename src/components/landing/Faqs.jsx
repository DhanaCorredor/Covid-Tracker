import { useState } from 'react';
import './Faqs.css';

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const allFaqs = [
    {
      q: '01. How does COVID-19 spread?',
      a: 'Data has shown that it spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone infected with the virus.'
    },
    {
      q: '02. What are the symptoms of COVID-19?',
      a: 'The most common symptoms are fever, dry cough, and tiredness. Other symtoms may include loss of taste or smell, nasal congestiom, sore throat, headache, and muscle aches.'
    },
    {
      q: '03. Should I wear mask?',
      a: 'Yes, wearing a mask is recomended, especially in crowded indoor spaces or where physical distancing is not possible. It healps prevent the spread of the virus to others.'
    },
    {
      q: '04. What does it mean to self-isolate?',
      a: 'Self-isolation means staying at home and separate from others because you are sick or habe tested positive for COVID-19. It is crucial to avoid spreading the infection to your community and household.'
    },
    {
      q: '05. Can children or adolescents catch COVID-19?',
      a: 'Yes, people of all ages can be infected and transmit the virus. While children and adolescenys generally have milder symptoms, they can still become seriously ill and spread the virus to others.'
    },
    {
      q: '06. Is there a vaccine or drug for COVID-19?',
      a: 'While some western, traditional or home remedies may provide comfort and alleviate symptoms of mild COVID-19, there are no medicines that have been shown to prevent or cure the disease. WHO does not recommend self-medication with any medicines.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="faqs-section">
      <div className="faqs-header">
        <span className="faqs-subtitle">
          Faq
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
              <div key={idx} className="faq-item" onClick={() => toggleFaq(idx)}>
                <h3 className={`faq-question ${isOpen ? 'open' : ''}`}>
                  {faq.q}
                </h3>
                {isOpen && faq.a && (
                  <p className="faq-answer">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
