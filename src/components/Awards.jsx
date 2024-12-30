import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const awards = [
  {
    id: 1,
    img: "1.png",
    name: "Brand Finance",
    title: "Mukesh D Ambani is #1 CEO in India, #2 globally in Brand Guardianship Index 2024",
  },
  {
    id: 2,
    img: "2.png",
    name: "100 Most powerful people",
    title: "Mukesh D Ambani is among the 100 Most Powerful People in Business 2024; only Indian on the list",
  },
  {
    id: 3,
    img: "3.png",
    name: "IE 100",
    title: "Mukesh D Ambani and Nita M Ambani are among the IE 100 Most Powerful Indians 2024",
  },
  {
    id: 4,
    img: "4.png",
    name: "Voice Data",
    title: "Mukesh D Ambani honoured with Lifetime Achievement Award 2024",
  },
  {
    id: 5,
    img: "5.png",
    name: "Best in Education",
    title: "Nita M Ambani recognised for ‘Outstanding Contributions to Brand India’ at IBLA Awards 2024",
  },
  {
    id: 6,
    img: "6.png",
    name: "Miss World",
    title: "Nita M Ambani receives Beauty with a Purpose Humanitarian Award",
  },
  {
    id: 7,
    img: "7.png",
    name: "MPW Asia",
    title: "Isha M Ambani recognized among Fortune 100 Most Powerful Women Asia for 2024",
  },
  {
    id: 8,
    img: "8.png",
    name: "Baazar",
    title: "Isha M Ambani named among Harper’s Bazaar 150 Vision",
  },
  {
    id: 9,
    img: "9.png",
    name: "Lokmat",
    title: "Isha M Ambani honoured at Lokmat Maharashtrian of the Year Awards 2024",
  },
  {
    id: 29,
    img: "29.png",
    name: "Business Today",
    title: `Isha Ambani recognised among 'Business Today Most Powerful Women' as "The Retail Disruptor"`,
  },
];

const Awards = () => {
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
    <section className="awards block dark overlay">
      <div className="container">
        <div className="secHeading">
          <h4>Leadership Awards</h4>
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

export default Awards;
