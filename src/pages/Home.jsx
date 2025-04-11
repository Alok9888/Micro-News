import { useEffect } from "react";

import Intro from "../components/Intro";
import Featured from "../components/Featured";
import Rewind from "../components/Rewind";
import Awards from "../components/Awards";
import FeaturedGlance from "../components/FeaturedGlance";
import RewindGlance from "../components/RewindGlance";
import AwardsGlance from "../components/AwardsGlance";
import Gallery from "../components/Gallery";
import Download from "../components/Download";

export default function Home() {
  useEffect(() => {
    document.title = "The Guardian News Digest 2024";
  }, []);

  return (
    <main>
      {/* Hero/Intro Video */}
      <Intro />

      {/* Featured */}
      <Featured />

      {/* Rewind */}
      <Rewind />

      {/* Awards and Recognitions */}
      <Awards />

      {/* Featured Glance */}
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
