import { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";

const ARWedding = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="arWedding block" id="ar-wedding">
      <div className="container">
        <div className="secHeading text-center">
          <h3>A&R Wedding</h3>
        </div>

        <div className="arVideo videoBox">
          {!isPlaying && <FiPlayCircle className="playBtn" strokeWidth={1} />}
          <div className="ratio ratio-16x9">
            {/* poster: img/videos/reliance-family-day-2024.jpg */}
            <video poster="/img/videos/ar-wedding.jpg" controls playsInline loop muted preload="auto" width={"100%"} onPlay={handlePlay}>
              <source src="/videos/ar-wedding.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARWedding;
