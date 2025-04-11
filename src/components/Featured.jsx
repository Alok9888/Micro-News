import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { fetchFeaturedArticles, fetchTopStories } from "../services/guardianApi";
import { RiDoubleQuotesL } from "react-icons/ri";
import "video.js/dist/video-js.css";

const Featured = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initialize AOS

  useEffect(() => {
    AOS.init({
      disable: "phone", // Disable on mobile devices
      duration: 600, // Animation duration
      offset: 120, // Trigger point (distance from element)
      easing: "ease-in-out", // Smooth animation
    });

    // Clean up AOS on component unmount
    return () => {
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // First, get the top story to exclude it
        const [topStory] = await fetchTopStories(1);

        // Then fetch featured articles
        const data = await fetchFeaturedArticles(8);

        // Filter out the top story if it exists in the featured articles
        const filteredData = topStory ? data.filter((article) => article.id !== topStory.id) : data;

        // Transform Guardian API data to match existing structure
        const transformedArticles = filteredData.map((article, index) => ({
          id: article.id,
          title: article.title,
          date: new Date(article.date).toLocaleDateString(),
          author: article.author || "The Guardian",
          imgSrc: article.image || `/img/articles/${index + 1}.jpg`,
          description: article.description,
          hasQuote: index === 0, // Make first article have a quote
          quote: article.description,
          quoteAuthor: article.author || "The Guardian",
          special: index === 1,
          secondary: index === 2,
        }));
        setArticles(transformedArticles);
      } catch (error) {
        console.error("Error loading featured articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <section className="featured block pb-0" id="featured">
        <div className="container">
          <div className="secHeading">
            <h3>Featured News</h3>
          </div>
          <div>Loading featured articles...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="featured block pb-0" id="featured">
      <div className="container">
        <div className="secHeading">
          <h3>Featured</h3>
        </div>

        {/* Leadership Insights */}
        <div className="row">
          {articles.map((article, index) => (
            <div className={`col-lg-${index === 0 ? 12 : 4} col-md-${article.secondary ? 6 : index === 0 ? 12 : 6}`} key={article.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`article ${index === 0 ? "highlightArticle" : ""} ${article.hasQuote ? "hasQuote" : ""}`}>
                <Link to={`article/${article.id}`} className="aWrap">
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
                    <Link to={`article/${article.id}`} className="btn btn-rounded">
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

export default Featured;
