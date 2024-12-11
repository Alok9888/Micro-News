import { Link } from "react-router-dom";
import Intro from "../components/Intro";
import Featured from "../components/Featured";
import Rewind from "../components/Rewind";
import Awards from "../components/Awards";
import ARWedding from "../components/ARWedding";

const articles = [
  { id: 1, title: "Reliance becomes a deep-tech company" },
  { id: 2, title: "India as a big intelligence market" },
];

export default function Home() {
  return (
    <main>
      {/* <section className="featured">
        <div className="container">
          <h3>Featured Articles</h3>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <Link to={`/article/${article.id}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section> */}

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
