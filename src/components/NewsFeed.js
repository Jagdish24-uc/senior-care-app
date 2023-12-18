import React, { useState, useEffect } from 'react';
import './NewsFeed.css';

const NewsFeed = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated API call for fetching news articles
    
    const fetchNews = async () => {
      try {
        
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=46912cb788ca4ab8ad23304eefb53b7d`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        setNewsArticles(data.articles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {newsArticles.map((article) => (
          <li key={article.title}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
