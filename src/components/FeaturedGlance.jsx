import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeaturedGlance = () => {
  const imgPath = "img/articles/";
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

  const articles = [
    {
      id: 25,
      imgSrc: "25.jpg",
      date: "November 2024",
      title: "Reliance and Disney complete JV to bring top entertainment brands to India",
      author: "",
      hasQuote: false,
      special: true,
    },
    {
      id: 26,
      imgSrc: "26.jpg",
      date: "August 2024",
      title: "Viacom18 records highest-ever viewership for Olympics in India",
      author: "",
      hasQuote: false,
      special: true,
    },
    {
      id: 27,
      imgSrc: "27.jpg",
      date: "September 2024",
      title: "RIL board approves 1:1 bonus issue: largest bonus issue in Indian equity markets",
      author: "",
      hasQuote: false,
      special: false,
    },
    {
      id: 28,
      imgSrc: "28.jpg",
      date: "July 2024",
      title: "JioThings and MediaTek collaborate to strengthen presence in global two-wheeler segment",
      author: "",
      hasQuote: false,
      special: false,
    },
    {
      id: 29,
      imgSrc: "29.jpg",
      date: "November 2024",
      title: "Tira opens new outlet at JWP; expands with partnerships and new offerings",
      author: "",
      hasQuote: false,
      special: false,
    },
    {
      id: 30,
      imgSrc: "30.jpg",
      date: "December 2024",
      title: "Jio Studios shines bright on the global stage with multiple awards",
      author: "",
      hasQuote: false,
      special: false,
    },
    {
      id: 31,
      imgSrc: "31.jpg",
      date: "April 2024",
      title: "Reliance Foundation holds landmark Early Childhood Care and Education conference",
      author: "",
      hasQuote: false,
      special: false,
    },
    {
      id: 32,
      imgSrc: "32.jpg",
      date: "February 2024",
      title: "RIL and bp participate in India Energy Week",
      author: "",
      hasQuote: false,
      special: false,
    },
  ];

  return (
    <section className="featured block pb-0" id="24AtGlance">
      <div className="container">
        <div className="secHeading">
          <h3>2024 at a Glance</h3>
        </div>

        {/* Leadership Insights */}
        <div className="row">
          {articles.map((article, index) => (
            <div className={`col-lg-${article.special ? 6 : 4} col-md-6`} key={article.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`article ${index === 0 ? "highlightArticle" : ""} ${article.hasQuote ? "hasQuote" : ""}`}>
                <Link to={`article/${article.id}`} className="aWrap">
                  <div className="aImg special">
                    <img src={`${imgPath}${article.imgSrc}`} alt={article.title} loading="lazy" />
                  </div>
                  <div className="aContent">
                    <small>{article.date}</small>
                    <h4>{article.title}</h4>
                    <span>{article.author}</span>
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

export default FeaturedGlance;
