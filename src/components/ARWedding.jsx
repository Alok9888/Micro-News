const ARWedding = () => {
  return (
    <section className="arWedding block" id="ar-wedding">
      <div className="container">
        <div className="secHeading text-center">
          <h3>A&R Wedding</h3>
        </div>

        <div className="arVideo">
          <div className="embed">
            {/* poster: img/videos/reliance-family-day-2024.jpg */}
            <video poster="/img/videos/ar-wedding.jpg" controls playsInline loop muted preload="auto" width={"100%"}></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARWedding;
