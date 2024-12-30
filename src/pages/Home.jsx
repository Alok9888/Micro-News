import { useEffect } from "react";

import Intro from "../components/Intro";
import Featured from "../components/Featured";
import Rewind from "../components/Rewind";
import Awards from "../components/Awards";
import ARWedding from "../components/ARWedding";
import FeaturedGlance from "../components/FeaturedGlance";
import RewindGlance from "../components/RewindGlance";
import AwardsGlance from "../components/AwardsGlance";
import Gallery from "../components/Gallery";
import Download from "../components/Download";

export default function Home() {
  useEffect(() => {
    document.title = "The Reliance Herald 2024";
  }, []);

  return (
    <main>
      {/* Hero/Intro Video */}
      <Intro />

      {/* Featurted */}
      <Featured />

      {/* Rewind */}
      <Rewind />

      {/* Awards and Recognitions */}
      <Awards />

      {/* AR Wedding */}
      <ARWedding />

      {/* 24 At A Glance */}
      <FeaturedGlance />

      {/* Rewind Glance */}
      <RewindGlance />

      {/* Awards Glance */}
      <AwardsGlance />

      {/* Gallery */}
      <Gallery />

      <Download />
    </main>
  );
}
