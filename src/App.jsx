import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/LeadershipHighlights/article/:id", element: <ArticleDetail /> },
  ]);

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
};

export default App;
