import './News.css';
import { NewsCard } from './NewsCard';

export const News = ({ newsData }) => {
  return (
    <div className="news-section">
        <div className="news-container">
          <div className="news-grid">
            {newsData && newsData.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
  );
};
