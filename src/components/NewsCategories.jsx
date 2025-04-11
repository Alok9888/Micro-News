import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticles } from "../services/guardianApi";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsCategories = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 600,
      offset: 120,
      easing: "ease-in-out",
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles({
          pageSize: 6,
          section: "film",
          "order-by": "newest",
          "show-fields": "thumbnail,headline,trailText,byline,main",
        });

        const transformedArticles = data.map((article) => ({
          id: article.id,
          title: article.title,
          date: new Date(article.date).toLocaleDateString(),
          imgSrc: article.image || `/img/categories/film.jpg`,
          description: article.description,
          author: article.author || "The Guardian",
        }));

        setArticles(transformedArticles);
      } catch (error) {
        console.error("Error loading movie news:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <section className="awards block dark overlay" id="newsCategories">
        <div className="container">
          <div className="secHeading">
            <h4>Movie News</h4>
          </div>
          <div>Loading articles...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="awards block dark overlay" id="newsCategories">
      <div className="container">
        <div className="secHeading">
          <h4>Movie News</h4>
        </div>

        <div className="row">
          {articles.map((article, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6" key={article.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="award">
                <Link to={`/article/${article.id}`} className="award-link">
                  <div className="awImg">
                    <img src={article.imgSrc} alt={article.title} />
                  </div>
                  <p>{article.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCategories;
