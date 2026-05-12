export const NewsCard = ({ imgSrc, title, date, comments, link }) => {
  return (
    <div className="news-card">
      <div className="news-card-img-container">
        <img src={imgSrc} alt={title} className="news-card-img" />
      </div>
      <div className="news-card-content">
        <div className="news-card-meta">
          <span className="news-card-meta-item">
            <svg className="news-card-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {date}
          </span>
          <span className="news-card-meta-item">
            <svg className="news-card-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
            {comments}
          </span>
        </div>
        <h3 className="news-card-title">
          {title}
        </h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="news-card-link">
          Continue
        </a>
      </div>
    </div>
  );
};
