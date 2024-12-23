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
    <section className="introVideo">
      <div className="iVideo ratio ratio-16x9">
        <video ref={videoRef} autoPlay muted loop controls onPlay={() => console.log("Video is playing...")}>
          <source src="videos/glance.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Intro;
