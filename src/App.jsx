import { useRoutes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";

const App = () => {
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
      </ParallaxProvider>
    </>
  );
};

export default App;
