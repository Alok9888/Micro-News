import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const awards = [
  {
    id: 10,
    img: "10.png",
    name: "Brand Finance",
    title: "Mukesh D Ambani is #1 CEO in India, #2 globally in Brand Guardianship Index 2024",
  },
  {
    id: 11,
    img: "11.png",
    name: "100 Most powerful people",
    title: "Mukesh D Ambani is among the 100 Most Powerful People in Business 2024; only Indian on the list",
  },
  {
    id: 12,
    img: "12.png",
    name: "TIME100",
    title: "RIL named ‘India’s Juggernaut’ in TIME100 2024",
  },
  {
    id: 13,
    img: "13.png",
    name: "Forbes Global 2000",
    title: "RIL retains top rank among Indian companies; ranked 49th globally for 2024",
  },
  {
    id: 14,
    img: "14.png",
    name: "Fortune 500",
    title: "RIL is top-ranked Indian company; ranked 86th globally for 2024",
  },
  {
    id: 15,
    img: "15.png",
    name: "Fortune",
    title: "RIL retains #1 position in Fortune’s ‘India’s Largest Companies’ list 2024",
  },
  {
    id: 16,
    img: "16.png",
    name: "Great Place to Work",
    title: "RIL and Reliance Retail certified ‘Great Place to Work’",
  },
  {
    id: 17,
    img: "17.png",
    name: "Mega Companies",
    title: "RIL, Reliance Retail, and Jio among top 20 ‘Mega Companies’",
  },
  {
    id: 18,
    img: "18.png",
    name: "Brand Guardianship Index",
    title: "Mukesh D Ambani is #1 CEO in India, #2 globally in Brand Guardianship Index 2024",
  },
  {
    id: 19,
    img: "19.png",
    name: "Telecom Company of the Year",
    title: "Jio is Telecom Company of the Year",
  },
  {
    id: 20,
    img: "20.png",
    name: "Future Ready Organisations",
    title: "Reliance Retail is among the Economic Times ‘Future Ready Organisations’ for 2024",
  },
  {
    id: 21,
    img: "21.png",
    name: "DAIS",
    title: "DAIS is #5 globally (outside USA and UK) on the HSBC Hurun Education Global High School rankings 2024",
  },
  {
    id: 22,
    img: "22.png",
    name: "Jio-bp",
    title: "Jio-bp wins ‘Company Excellence Award: Most Trusted EV Charging Provider with the Largest Nationwide Network’",
  },
  {
    id: 23,
    img: "23.png",
    name: "Technology Excellence",
    title: "Jio recognised for excellence in technology",
  },
  {
    id: 24,
    img: "24.png",
    name: "Top 100 ‘Best Employers Among Nation-Builders’",
    title: "RIL, Reliance Retail, and Jio are among ‘Best Employers Among Nation-Builders’",
  },
  {
    id: 25,
    img: "25.png",
    name: "India’s Most Respected Companies",
    title: "RIL and Reliance Retail among ‘India’s Most Respected Companies’ for 2024",
  },
  {
    id: 26,
    img: "26.png",
    name: "DAIS Ranking",
    title: "DAIS is #5 globally (outside USA and UK) on the HSBC Hurun Education Global High School rankings 2024",
  },
  {
    id: 27,
    img: "27.png",
    name: "Desirable General Management Recruiters",
    title: "RIL is #2 in ‘Desirable General Management Recruiters’; is among top 25 ‘Dream Companies’",
  },
  {
    id: 28,
    img: "28.png",
    name: "Most Trusted EV Charging Provider",
    title: "Jio-bp wins ‘Company Excellence Award: Most Trusted EV Charging Provider with the Largest Nationwide Network’",
  },
];

const AwardsGlance = () => {
  const imgPath = "img/awards/";
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
    <section className="awards block dark overlay primary">
      <div className="container">
        <div className="secHeading">
          <h4>Business Awards & Recognition</h4>
        </div>

        <div className="row">
          {awards.map((award, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6" key={award.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="award">
                <div className="awImg ">
                  <img src={`${imgPath}${award.img}`} alt={`${award.name} logo`} />
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

export default AwardsGlance;
