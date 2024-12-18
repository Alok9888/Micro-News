import { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";

const FamilyDayVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="fdVideo videoBox mb-5">
      <div className="ratio ratio-16x9">
        {/* Conditionally render the play icon */}
        {!isPlaying && <FiPlayCircle className="playBtn" strokeWidth={1} />}
        {/* Video element */}
        <video
          poster="img/videos/reliance-family-day-2024.jpg"
          controls
          playsInline
          loop
          muted
          preload="auto"
          width={"100%"}
          onPlay={handlePlay} // Handle play event
        >
          <source src="img/videos/reliance-family-day-2024.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default FamilyDayVideo;
