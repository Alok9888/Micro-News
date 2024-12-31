import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

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
      id: 45,
      imgSrc: "45.jpg",
      date: "December 2024",
      title: "Celebrating 25 years of the Jamnagar Refinery ",
      quote:
        "We complete 25 years since the commissioning of first refinery [at Jamnagar] in 1999. Jamnagar is the jewel in the crown of the Reliance group.",
      quoteAuthor: "RIL CMD Mukesh D Ambani on RFD 2024 ",
      hasQuote: true,
      special: false,
    },
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
            <div
              className={`col-lg-${index === 0 ? 12 : article.special ? 6 : 4} col-md-${index === 0 ? 12 : 6}`}
              key={article.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`article ${index === 0 ? "highlightArticle" : ""} ${article.hasQuote ? "hasQuote hasQuoteAlt" : ""}`}>
                <Link to={`article/${article.id}`} className="aWrap">
                  <div className="aImg special">
                    <img src={`${imgPath}${article.imgSrc}`} alt={article.title} loading="lazy" />
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

export default FeaturedGlance;
