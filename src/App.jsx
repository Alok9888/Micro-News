import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import GoToTop from "./components/GoToTop";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "article/:id",
      element: <ArticleDetail />,
    },
  ]);

  return (
    <>
      <ParallaxProvider>
        <Header />
        {routes}
        <Footer />
        {isScrolled && <GoToTop />}
      </ParallaxProvider>
    </>
  );
};

export default App;
