// Isotpe/Fancybox Gallery
// This component will be used to display the gallery section of the website. It will display images in a grid layout and will use Isotope and Fancybox to create a lightbox effect when an image is clicked. The images will be fetched from the API and displayed in the grid layout.
const galleryPath = "/img/gallery/";

const Gallery = () => {
  return (
    <section className="block" id="gallery">
      <div className="container">
        <div className="secHeading">
          <h3>Gallery</h3>
        </div>

        <div className="grid galleryGrid" id="galleryGrid"></div>
      </div>
    </section>
  );
};

export default Gallery;
