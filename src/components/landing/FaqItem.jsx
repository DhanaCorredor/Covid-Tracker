export const FaqItem = ({ q, a, isOpen, onClick }) => {
  return (
    <button 
      type="button"
      className="faq-item" 
      onClick={onClick} 
      aria-expanded={isOpen}
    >
      <h3 className={`faq-question ${isOpen ? 'open' : ''}`}>
        {q}
      </h3>
      {isOpen && a && (
        <p className="faq-answer">
          {a}
        </p>
      )}
    </button>
  );
};
