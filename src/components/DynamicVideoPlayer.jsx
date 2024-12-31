import { useEffect } from "react";
import videojs from "video.js";

const DynamicVideoPlayer = ({ src, poster }) => {
  useEffect(() => {
    const container = document.getElementById("dynamic-video-container");

    if (container) {
      // Inject the video element dynamically
      container.innerHTML = `
        <video
          class="video-js vjs-fluid"
          id="dynamic-video-player"
          controls
          preload="auto"
          poster="${poster}"
        >
          <source
            src="${src}"
            type="application/x-mpegURL"
          />
        </video>
      `;

      // Initialize Video.js on the dynamically added video element
      const videoElement = document.getElementById("dynamic-video-player");
      if (videoElement) {
        const player = videojs(videoElement, {
          fluid: true,
          controls: true,
          autoplay: false,
          preload: "auto",
        });

        // Cleanup on unmount
        return () => {
          player.dispose();
        };
      }
    }
  }, [src, poster]); // Re-run effect if `src` or `poster` changes

  return <div id="dynamic-video-container"></div>;
};

export default DynamicVideoPlayer;
