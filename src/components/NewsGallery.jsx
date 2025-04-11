import { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { fetchArticles } from "../services/guardianApi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsGallery = () => {
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const galleryRef = useRef(null);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 600,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // Fetch articles with images from the culture section
        const data = await fetchArticles({
          pageSize: 9,
          section: "culture",
          "show-fields": "thumbnail,headline,trailText,byline,main",
          "order-by": "newest",
          "show-elements": "image",
        });

        // Filter articles that have images
        const articlesWithImages = data.filter((article) => article.image);

        // Transform the data
        const transformedArticles = articlesWithImages.map((article) => ({
          id: article.id,
          title: article.title,
          description: article.description,
          image: article.image,
          author: article.author || "The Guardian",
          date: new Date(article.date).toLocaleDateString(),
        }));

        setArticles(transformedArticles);
      } catch (error) {
        console.error("Error loading gallery articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  // Lazy initialize Isotope and Fancybox when gallery is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isIsotopeInitialized && articles.length > 0) {
          initializeGallery();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, [isIsotopeInitialized, articles]);

  const initializeGallery = () => {
    Fancybox.bind("[data-fancybox]", {
      caption: function (fancybox, carousel, slide) {
        return slide.caption;
      },
    }); // Initialize Fancybox

    const grid = document.querySelector("#galleryGrid");
    if (grid) {
      imagesLoaded(grid, { background: true }, () => {
        new Isotope(grid, {
          itemSelector: ".grid-item",
          percentPosition: true,
          masonry: {
            columnWidth: ".grid-sizer",
            gutter: 0,
            fitWidth: true,
          },
          sortBy: "original-order",
        });

        setIsIsotopeInitialized(true);
      });
    }
  };

  if (loading) {
    return (
      <section className="block gallery" id="newsGallery" ref={galleryRef}>
        <div className="container">
          <div className="secHeading">
            <h3>News Gallery</h3>
          </div>
          <div>Loading gallery...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="block gallery" id="newsGallery" ref={galleryRef}>
      <div className="container">
        <div className="secHeading">
          <h3>News Gallery</h3>
        </div>

        <div className="grid galleryGrid" id="galleryGrid">
          <div className="grid-sizer"></div>
          {articles.map((article, index) => (
            <div key={article.id} className="grid-item" data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="gallery-item">
                <a data-fancybox="gallery" href={article.image} data-caption={`<h4>${article.title}</h4><p>${article.description}</p><small>By ${article.author} | ${article.date}</small>`}>
                  <img src={article.image} alt={article.title} loading="lazy" />
                </a>
                <Link to={`/article/${article.id}`} className="gallery-link">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGallery;
