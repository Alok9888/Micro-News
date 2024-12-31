import { useState, useRef, useEffect } from "react";
import { FiPlayCircle, FiPauseCircle } from "react-icons/fi";

// import "video.js/dist/video-js.css";
// import videojs from "video.js";

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

  // Initialize Video.js for dynamically rendered videos
  // useEffect(() => {
  //   const players = [];

  //   const initializeVideoJS = () => {
  //     const videoElements = document.querySelectorAll(".video-js");
  //     videoElements.forEach((video) => {
  //       const existingPlayer = videojs.players[video.id];
  //       if (existingPlayer) {
  //         existingPlayer.dispose();
  //       }
  //       const player = videojs(video, {}, () => {
  //         console.log(`Home Video.js player initialized for: ${video.id}`);
  //       });
  //       players.push(player);
  //     });
  //   };

  //   initializeVideoJS();

  //   return () => {
  //     // Dispose all players on unmount
  //     players.forEach((player) => player.dispose());
  //   };
  // }, []);

  return (
    <div className="fdVideo videoBox mb-5" id="familyDayVideo">
      <div className="playPauseIcon" onClick={handlePlayPause}>
        {isPlaying ? <FiPauseCircle className="playBtn pauseBtn" strokeWidth={1} /> : <FiPlayCircle className="playBtn" strokeWidth={1} />}
      </div>
      <div className="ratio ratio-16x9">
        <video
          ref={videoRef}
          poster="img/videos/rfd.png"
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

      {/* https://indiahouse.cdn.jio.com//bpkvod/jiotv/default/676f8978777ea1a55158b4aa/676f8978777ea1a55158b4aa/index_jtv_web_premium.m3u8 */}

      {/* <video id="meta-video" className="video-js vjs-fluid" controls preload="auto" data-setup="{}">
        <source
          src="https://indiahouse.cdn.jio.com//bpkvod/jiotv/default/676f8978777ea1a55158b4aa/676f8978777ea1a55158b4aa/index_jtv_web_premium.m3u8"
          type="application/x-mpegURL"
        />
      </video> */}
    </div>
  );
};

export default FamilyDayVideo;
