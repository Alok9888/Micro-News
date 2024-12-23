import { useState, useRef } from "react";
import { FiPlayCircle, FiPauseCircle } from "react-icons/fi";

const FamilyDayVideo = () => {
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
    <div className="fdVideo videoBox mb-5" id="familyDayVideo">
      <div className="playPauseIcon" onClick={handlePlayPause}>
        {isPlaying ? <FiPauseCircle className="playBtn pauseBtn" strokeWidth={1} /> : <FiPlayCircle className="playBtn" strokeWidth={1} />}
      </div>
      <div className="ratio ratio-16x9">
        <video
          ref={videoRef}
          poster="img/videos/reliance-family-day-2024.jpg"
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
          <source src="videos/glance.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default FamilyDayVideo;
