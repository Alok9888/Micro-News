import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { fetchArticles } from "../services/guardianApi";

const FeaturedGlance = () => {
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
          pageSize: 9,
          tag: "tone/analysis",
          "order-by": "newest",
        });
        console.log(data);
        const transformedArticles = data.map((article, index) => ({
          id: article.id,
          title: article.title,
          date: new Date(article.date).toLocaleDateString(),
          imgSrc: article.image || `/img/articles/${index + 1}.jpg`,
          description: article.description,
          author: article.author || "The Guardian",
          quote: index === 0 ? article.description : null,
          quoteAuthor: article.author || "The Guardian",
          hasQuote: index === 0,
          special: index === 1 || index === 2,
        }));
        setArticles(transformedArticles);
      } catch (error) {
        console.error("Error loading trending analysis articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <section className="featured block" id="24AtGlance">
        <div className="container">
          <div className="secHeading">
            <h3>Trending Analysis</h3>
          </div>
          <div>Loading articles...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="featured block " id="24AtGlance">
      <div className="container">
        <div className="secHeading">
          <h3>Trending Analysis</h3>
        </div>

        <div className="row">
          {articles.map((article, index) => (
            <div className={`col-lg-${index === 0 ? 12 : article.special ? 6 : 4} col-md-${index === 0 ? 12 : 6}`} key={article.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`article ${index === 0 ? "highlightArticle" : ""} ${article.hasQuote ? "hasQuote hasQuoteAlt" : ""}`}>
                <Link to={`/article/${article.id}`} className="aWrap">
                  <div className="aImg special">
                    <img src={article.imgSrc} alt={article.title} loading="lazy" />
                  </div>
                  <div className={`aContent ${article.hasQuote ? "d-none" : ""}`}>
                    <small>{article.date}</small>
                    <h4>{article.title}</h4>
                    <span>{article.author}</span>
                  </div>
                </Link>
                {article.hasQuote && (
                  <div className="aQuote">
                    <div className="aContent">
                      <small>{article.date}</small>
                      <h4>{article.title}</h4>
                      <span>{article.author}</span>
                    </div>
                    <h5>
                      <RiDoubleQuotesL />
                      {article.quote}
                    </h5>
                    <span>{article.quoteAuthor}</span>
                    <Link to={`/article/${article.id}`} className="btn btn-rounded">
                      <i className="fa fa-play"></i> Read more
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGlance;
