import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../services/guardianApi";
import AOS from "aos";
import "aos/dist/aos.css";

const TrendingTopics = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 600,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles({
          pageSize: 3,
          tag: "tone/analysis",
          "order-by": "newest",
        });
        setArticles(data);
      } catch (error) {
        console.error("Error loading trending articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <section className="trending block">
        <div className="container">
          <div className="secHeading text-center">
            <h3>Trending Analysis</h3>
          </div>
          <div>Loading trending topics...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="trending block">
      <div className="container">
        <div className="secHeading text-center">
          <h3>Trending Analysis</h3>
        </div>

        <div className="row">
          {articles.map((article, index) => (
            <div className="col-lg-4" key={article.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="trend-card">
                <Link to={`/article/${article.id}`}>
                  {article.image && (
                    <div className="trend-image">
                      <img src={article.image} alt={article.title} loading="lazy" />
                    </div>
                  )}
                  <div className="trend-content">
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                    <span className="trend-date">{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
