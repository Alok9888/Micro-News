import React from "react";
import { Link } from "react-router-dom";

const articlesData = [
  {
    id: 1,
    title: '"Reliance will continue to play a leading role in Gujarat’s growth story"',
    imageUrl: "/img/rewind/1.jpg",
    description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 2,
    title: '"Reliance has proudly partnered in Tamil Nadu’s growth over the years"',
    imageUrl: "/img/rewind/2.jpg",
    description: "RIL CMD Mukesh Ambani at Tamil Nadu Global Investors’ Meet | January 2024",
  },
  {
    id: 3,
    title: "Nita Ambani re-elected unanimously as IOC member",
    imageUrl: "/img/rewind/3.jpg",
    description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 4,
    title: "Nita Ambani announces new initiative empowering women in sports to mark 3rd anniversary of Her Circle",
    imageUrl: "/img/rewind/4.jpg",
    description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 5,
    title: "NMACC marks one year of celebrating the best of India and the world",
    imageUrl: "/img/rewind/5.jpg",
    description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 6,
    title: "NMAJS and NMAJS-EYC open in Mumbai",
    imageUrl: "/img/rewind/6.jpg",
    description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 7,
    title: "Nita M Ambani launches New Health Seva Plan to commemorate Sir HN RFH’s 10-year anniversary",
    imageUrl: "/img/rewind/7.jpg",
    description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
];

const Rewind = () => {
  return (
    <section className="rewind block">
      <div className="container">
        <div className="secHeading">
          <h3>Rewind</h3>
        </div>

        <div className="row">
          {articlesData.map((article) => (
            <div key={article.id} className="col-md-3">
              <div className="article articleAlt">
                <div className="aImg">
                  <img src={article.imageUrl} alt="" />
                </div>
                <div className="aContent">
                  <Link to={`/article/${article.id}`}>
                    <h4>{article.title}</h4>
                  </Link>
                  <span>{article.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewind;
