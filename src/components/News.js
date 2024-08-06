import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/news`);
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching the news', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      {articles.map((article, index) => (
        <div key={index} className="news-article">
          <h3>{article.title}</h3>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
          <p>{article.description}</p>
          <div className="news-meta">
            <span>Source: {article.source.name}</span>
            <span>Published: {new Date(article.publishedAt).toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
