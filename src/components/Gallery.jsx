import { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import images from "../content/images"; // Assuming this contains your images data

const Gallery = () => {
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);
  const galleryRef = useRef(null);

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
        const iso = new Isotope(grid, {
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
    <section className="block gallery" id="gallery" ref={galleryRef}>
      <div className="container">
        <div className="secHeading">
          <h3>Memories in Pictures</h3>
        </div>

        {/* Gallery Grid */}
        <div className="grid galleryGrid" id="galleryGrid">
          <div className="grid-sizer"></div>
          {images.map((image, index) => (
            <div key={index} className={`grid-item ${image.category}`}>
              <a data-fancybox="gallery" href={image.src}>
                <img src={image.src} alt={image.title} loading="lazy" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
