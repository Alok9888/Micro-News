import { useEffect } from "react";

import Intro from "../components/Intro";
import Featured from "../components/Featured";
import TopStories from "../components/TopStories";
import NewsCategories from "../components/NewsCategories";
import TrendingNews from "../components/TrendingNews";
import LatestNews from "../components/LatestNews";
import NewsGallery from "../components/NewsGallery";
import Subscribe from "../components/Subscribe";

export default function Home() {
  useEffect(() => {
    document.title = "Micro News Portal";
  }, []);

  return (
    <main>
      {/* Intro/Hero News*/}
      <Intro />

      {/* Featured News */}
      <Featured />

      {/* Top Stories */}
      <TopStories />

      {/* News Categories */}
      <NewsCategories />

      {/* Trending News */}
      <TrendingNews />

      {/* Latest News */}
      <LatestNews />

      {/* News Gallery */}
      <NewsGallery />

      {/* Subscribe */}
      <Subscribe />
    </main>
  );
}
