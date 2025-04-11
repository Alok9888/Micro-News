import { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { fetchMediaContent } from "../services/guardianApi";

const NewsGallery = () => {
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);
  const [articles, setArticles] = useState([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    const loadArticles = async () => {
      console.log("Fetching gallery data...");
      const data = await fetchMediaContent(15); // Fetch 15 articles
      console.log("Fetched data:", data);

      if (data.length < 15) {
        console.warn("API returned fewer articles than expected. Adding placeholders.");
        const placeholders = Array.from({ length: 15 - data.length }, (_, i) => ({
          id: `placeholder-${i}`,
          image: `https://picsum.photos/600/400?random=${i + 1}`,
          title: `Placeholder Title ${i + 1}`,
        }));
        setArticles([...data, ...placeholders]);
      } else {
        setArticles(data);
      }
    };

    loadArticles();
  }, []);

  // Lazy initialize Isotope and Fancybox when gallery is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isIsotopeInitialized) {
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
  }, [isIsotopeInitialized]);

  const initializeGallery = () => {
    Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox

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

  return (
    <section className="block gallery" id="newsGallery" ref={galleryRef}>
      <div className="container">
        <div className="secHeading">
          <h3>News Gallery</h3>
        </div>

        <div className="grid galleryGrid" id="galleryGrid">
          <div className="grid-sizer"></div>
          {articles.map((article, index) => (
            <div key={article.id || index} className="grid-item news">
              <a data-fancybox="gallery" href={article.image || "https://picsum.photos/600/400"} data-caption={article.title}>
                <img src={article.image || "https://picsum.photos/600/400"} alt={article.title} loading="lazy" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGallery;
