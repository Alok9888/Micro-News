import { useEffect, useState } from "react";
import { fetchAwardArticles } from "../services/guardianApi";
import AOS from "aos";
import "aos/dist/aos.css";

const Awards = () => {
  const [awards, setAwards] = useState([]);
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
    const loadAwards = async () => {
      try {
        const data = await fetchAwardArticles();
        const transformedAwards = data.map((article) => ({
          id: article.id,
          img: article.image || `/img/awards/no-logo.png`,
          name: article.author || "The Guardian",
          title: article.title,
        }));
        setAwards(transformedAwards);
      } catch (error) {
        console.error("Error loading awards:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAwards();
  }, []);

  if (loading) {
    return (
      <section className="awards block dark overlay">
        <div className="container">
          <div className="secHeading">
            <h4>Latest Achievements</h4>
          </div>
          <div>Loading achievements...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="awards block dark overlay">
      <div className="container">
        <div className="secHeading">
          <h4>Latest Achievements</h4>
        </div>

        <div className="row">
          {awards.map((award, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6" key={award.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="award">
                <div className="awImg">
                  <img src={award.img} alt={`${award.name}`} />
                </div>
                <p>{award.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
