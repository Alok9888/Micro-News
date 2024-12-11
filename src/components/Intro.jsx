import React from "react";

const Intro = () => {
  return (
    <section className="introVideo">
      <div className="iVideo">
        <video autoPlay loop muted>
          <source src="img/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Intro;
