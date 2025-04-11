import { useEffect, useState } from "react";
import { fetchAwardArticles } from "../services/guardianApi";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestNews = () => {
  const [news, setNews] = useState([]);
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
    const loadNews = async () => {
      try {
        const data = await fetchAwardArticles(6); // Only fetch 6 news items for glance view
        const transformedNews = data.map((article) => ({
          id: article.id,
          img: article.image || `/img/awards/no-logo.png`,
          name: article.author || "The Guardian",
          title: article.title,
        }));
        setNews(transformedNews);
      } catch (error) {
        console.error("Error loading latest news:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <section className="awards block dark overlay primary" id="latestNews">
        <div className="container">
          <div className="secHeading">
            <h4>Latest News</h4>
          </div>
          <div>Loading news...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="awards block dark overlay primary" id="latestNews">
      <div className="container">
        <div className="secHeading">
          <h4>Latest News</h4>
        </div>

        <div className="row">
          {news.map((item, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6" key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="award">
                <div className="awImg">
                  <img src={item.img} alt={`${item.name}`} />
                </div>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
