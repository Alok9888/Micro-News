import { useEffect } from "react";

import Intro from "../components/Intro";
import Featured from "../components/Featured";
import Rewind from "../components/Rewind";
import Awards from "../components/Awards";
import ARWedding from "../components/ARWedding";

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

      {/* Rewind (7) */}
      <Rewind />

      {/* Awards and Recognitions (6) */}
      <Awards />

      {/* AR Wedding */}
      <ARWedding />
    </main>
  );
}
