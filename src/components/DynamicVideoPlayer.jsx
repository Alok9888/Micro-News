import  { useEffect } from "react";
import videojs from "video.js";

const DynamicVideoPlayer = () => {
  useEffect(() => {
    const container = document.getElementById("familyDayVideo");

    if (container) {
      // Inject the video element dynamically
      container.innerHTML = `
        <video
          class="video-js vjs-fluid"
          id="dynamic-video-player"
          controls
          preload="auto"
          poster="img/videos/rfd.png"
        >
          <source
            src="https://indiahouse.cdn.jio.com//bpkvod/jiotv/default/676f8978777ea1a55158b4aa/676f8978777ea1a55158b4aa/index_jtv_web_premium.m3u8"
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
  }, []);

};

export default DynamicVideoPlayer;
