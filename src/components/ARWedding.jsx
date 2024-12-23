import { useState, useRef } from "react";
import { FiPlayCircle, FiPauseCircle } from "react-icons/fi";

const ARWedding = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="arWedding block">
      <div className="container">
        <div className="secHeading text-center">
          <h3>A&R Wedding</h3>
        </div>

        <div className="arVideo videoBox">
          <div className="playPauseIcon" onClick={handlePlayPause}>
            {isPlaying ? (
              <FiPauseCircle className="playBtn pauseBtn" strokeWidth={1} />
            ) : (
              <FiPlayCircle className="playBtn" strokeWidth={1} />
            )}
          </div>
          <div className="ratio ratio-16x9">
            <video
              ref={videoRef}
              poster="img/videos/ar-wedding.jpg"
              controls
              playsInline
              loop
              muted
              preload="auto"
              width={"100%"}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={handleVideoEnd}
            >
              <source src="videos/ar-wedding.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARWedding;
