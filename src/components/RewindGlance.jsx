import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const articlesData = [
  {
    id: 33,
    title: "Celebrating “Let’s Move India” to promote the spirit of sports",
    imgSrc: "33.jpg",
    description: "June 2024",
  },
  {
    id: 34,
    title: "Reliance Retail and ASOS partner to bring ASOS own brands to India",
    imgSrc: "34.jpg",
    description: "May 2024",
  },
  {
    id: 35,
    title: "RBL UK and Mothercare announce strategic partnership",
    imgSrc: "35.jpg",
    description: "October 2024",
  },
  {
    id: 36,
    title: "EL&N, in partnership with RBL, opens at Jio World Plaza",
    imgSrc: "36.jpg",
    description: "October 2024",
  },
  {
    id: 37,
    title: "Reliance Retail and Delta Galil announce JV in India",
    imgSrc: "37.jpg",
    description: "September 2024",
  },
  {
    id: 38,
    title: "Jio-bp onboards women as field executives: A first in the aviation industry",
    imgSrc: "38.jpg",
    description: "August 2024",
  },
  {
    id: 39,
    title: "JioPhone Prima 2 launched",
    imgSrc: "39.jpg",
    description: "September 2024",
  },
  {
    id: 40,
    title: "Jio and OnePlus India partner to drive 5G innovation at scale",
    imgSrc: "40.jpg",
    description: "February 2024",
  },
  {
    id: 41,
    title: "Reliance Foundation and partners launch LiftEd to strengthen foundational learning for four million children in India",
    imgSrc: "41.jpg",
    description: "January 2024",
  },
  {
    id: 42,
    title: "Reliance Foundation and NSDC to make half a million youth future-ready",
    imgSrc: "42.jpg",
    description: "February 2024",
  },
  {
    id: 43,
    title: "Reliance Foundation Skilling Academy, a new-age skilling platform, is launched",
    imgSrc: "43.jpg",
    description: "September 2024",
  },
  {
    id: 44,
    title: "RIL subsidiary Strand Life Sciences develops breakthrough technologies",
    imgSrc: "44.jpg",
    description: "April 2024",
  },
];

const RewindGlance = () => {
  const imgPath = "img/rewind/";

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

  return (
    <section className="rewind pb-4">
      <div className="container">
        <div className="row">
          {articlesData.map((article, index) => (
            <div key={article.id} className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <Link to={`article/${article.id}`}>
                <div className="article articleAlt">
                  <div className="aImg special">
                    <img src={`${imgPath}${article.imgSrc}`} alt={article.title} loading="lazy" />
                  </div>
                  <div className="aContent">
                    {article.description && <span>{article.description}</span>}
                    <h4>{article.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewindGlance;
