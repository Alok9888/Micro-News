import { useRef, useEffect } from "react";

const Intro = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play the video when in view
          videoRef.current?.play();
        } else {
          // Pause the video when out of view
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className="introVideo" id="rewind">
      <div className="iVideo ratio ratio-16x9">
        <video ref={videoRef} autoPlay muted loop controls>
          <source src="videos/glance.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <video
        id="my-video-582"
        className="video-js vjs-fluid w-100"
        controls
        preload="auto"
        poster="https://rworld.ril.com/sites/rworld/PublishingImages/Rewind-2024-Frame.jpg.png"
        data-setup="{}"
      >
        <source
          src="https://rworld.ril.com/vod/_definst_/mp4:RWorld/Reliance-Herald-Rewind-2024_301224190028.mp4/playlist.m3u8"
          type="application/x-mpegURL"
        />
      </video> */}
    </section>
  );
};

export default Intro;
