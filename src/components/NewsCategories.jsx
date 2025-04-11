import { useEffect, useState } from "react";
import { fetchAwardArticles } from "../services/guardianApi";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsCategories = () => {
  const [categories, setCategories] = useState([]);
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
    const loadCategories = async () => {
      try {
        const data = await fetchAwardArticles(6);
        const transformedCategories = data.map((article) => ({
          id: article.id,
          img: article.image || `/img/awards/no-logo.png`,
          name: article.author || "The Guardian",
          title: article.title,
        }));
        setCategories(transformedCategories);
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) {
    return (
      <section className="awards block dark overlay" id="newsCategories">
        <div className="container">
          <div className="secHeading">
            <h4>News Categories</h4>
          </div>
          <div>Loading categories...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="awards block dark overlay" id="newsCategories">
      <div className="container">
        <div className="secHeading">
          <h4>News Categories</h4>
        </div>

        <div className="row">
          {categories.map((category, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6" key={category.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="award">
                <div className="awImg">
                  <img src={category.img} alt={`${category.name}`} />
                </div>
                <p>{category.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCategories;
