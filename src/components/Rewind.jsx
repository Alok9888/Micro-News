import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const articlesData = [
  {
    id: 13,
    date: "Vibrant Gujarat Summit | January 2024",
    title: "“Reliance will continue to play a leading role in Gujarat’s growth story”",
    imgSrc: "1.jpg",
    description: "Mukesh D Ambani",
  },
  {
    id: 14,
    date: "Tamil Nadu Global Investors Meet | January 2024",
    title: "“Reliance has proudly partnered in Tamil Nadu’s growth over the years”",
    imgSrc: "2.jpg",
    description: "Mukesh D Ambani",
  },
  {
    id: 15,
    date: "IOC re-election | July 2024",
    title: "“Deeply honoured to be re-elected”",
    imgSrc: "3.jpg",
    description: "Nita M Ambani on her unanimous re-election as IOC member ",
  },
  {
    id: 16,
    date: "Her Circle 3rd anniversary | March 2024",
    title: "“The WinnHER Circle Project spotlights the effort of women athletes”",
    imgSrc: "4.jpg",
    description: "Nita M Ambani on empowering women and girls in sports",
  },
  {
    id: 17,
    date: "One year of NMACC | March 2024",
    title: "Celebrating the best of India and the world",
    imgSrc: "5.jpg",
    description: "",
  },
  {
    id: 18,
    date: "Breast health awareness | April 2024",
    title: "Isha M Ambani launches book on breast health awareness",
    imgSrc: "6.jpg",
    description: "",
  },
  {
    id: 19,
    date: "New openings | October 2024",
    title: "NMAJS and NMAJS-EYC, envisioned and led by Isha M Ambani, open in Mumbai",
    imgSrc: "11.jpg",
    description: "",
  },
  {
    id: 20,
    date: "ICT Day | May 2024",
    title: `“For India to shine, more girls must take up STEM”`,
    imgSrc: "8.jpg",
    description: "Isha M Ambani",
  },
  {
    id: 21,
    date: "Reliance-Disney JV | November 2024",
    title: "Nita M Ambani to be Chairperson",
    imgSrc: "9.jpg",
    description: "",
  },
  {
    id: 22,
    date: "10 Years of RFH | October 2024",
    title: "Nita M Ambani launches new Health Seva Plan",
    imgSrc: "7.jpg",
    description: "",
  },
  {
    id: 23,
    date: "Reliance Green Diwali  Utsav | October 2024",
    title: "Reliance leaders address colleagues and family members at grand event",
    imgSrc: "10.jpg",
    description: "",
  },
];

const Rewind = () => {
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
                    <small>{article.date}</small>
                    <h4>{article.title}</h4>
                    {article.description && <span>{article.description}</span>}
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

export default Rewind;
