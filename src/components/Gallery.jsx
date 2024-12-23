import { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import images from "../content/images"; // Assuming this contains your images data

const Gallery = () => {
  const [isotopeInstance, setIsotopeInstance] = useState(null);

  useEffect(() => {
    // console.log("Images loaded:", images);
    Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
  }, []);

  useEffect(() => {
    const grid = document.querySelector("#galleryGrid");

    if (grid) {
      // Wait for all images to load before initializing Isotope
      imagesLoaded(grid, { background: true }, (instance) => {
        // console.log("Images loaded!", instance);
        const iso = new Isotope(grid, {
          itemSelector: ".grid-item",
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: ".grid-sizer",
            gutter: 0,
            fitWidth: true,
          },
          sortBy: "original-order",
        });

        // console.log("Isotope instance:", iso);
        setIsotopeInstance(iso);
      });
    }

    return () => {
      if (isotopeInstance) {
        isotopeInstance.destroy();
        // console.log("Isotope instance destroyed");
      }
    };
  }, [images]);

  return (
    <section className="block" id="gallery">
      <div className="container">
        <div className="secHeading">
          <h3>Memories in Picture</h3>
        </div>

        {/* Gallery Grid */}
        <div className="grid galleryGrid" id="galleryGrid">
          <div className="grid-sizer"></div> {/* This is used by Isotope to calculate column width */}
          {images.map((image, index) => (
            <div key={index} className={`grid-item ${image.category}`}>
              <a data-fancybox="gallery" href={image.src}>
                <img src={image.src} alt={image.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
