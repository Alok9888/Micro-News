import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchArticleById } from "../services/guardianApi";
import Loading from "../components/Loading";
import "video.js/dist/video-js.css";
import videojs from "video.js";

const ArticleDetail = () => {
  const location = useLocation();
  const articleId = location.pathname.split("/").slice(2).join("/"); // Extract the full path after /article/
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initializedPlayers, setInitializedPlayers] = useState([]);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const articleData = await fetchArticleById(articleId);
        console.log("Article Data in Component:", articleData);
        if (articleData) {
          setArticle(articleData);
          document.title = articleData.title;
        }
      } catch (error) {
        console.error("Error loading article:", error);
      } finally {
        setLoading(false);
      }
    };

    if (articleId) {
      loadArticle();
    }
  }, [articleId]);

  useEffect(() => {
    const initializeVideoJS = () => {
      const videoElements = document.querySelectorAll(".video-js");
      const newPlayers = [];

      videoElements.forEach((video) => {
        const existingPlayer = videojs.players[video.id];
        if (existingPlayer) {
          existingPlayer.dispose();
        }
        const player = videojs(video, {}, () => {
          console.log(`Video.js player initialized for: ${video.id}`);
        });
        newPlayers.push(player);
      });

      setInitializedPlayers(newPlayers);
    };

    if (article && article.videoUrl) {
      initializeVideoJS();
    }

    return () => {
      initializedPlayers.forEach((player) => player.dispose());
      setInitializedPlayers([]);
    };
  }, [article]);

  if (loading) {
    return <Loading />;
  }

  if (!article) {
    return (
      <section className="block articleSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2>Article not found</h2>
              <p>The requested article could not be found.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="block articleSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <article className="articleBlock">
              <div className="articleHeader">
                <h2>{article.title}</h2>
                <span>
                  {article.author} | {new Date(article.date).toLocaleDateString()}
                </span>

                <div className="articleMedia">{article.image && <img src={article.image} alt={article.title} className="w-100" />}</div>

                {article.description && <div className="article-description" dangerouslySetInnerHTML={{ __html: article.description }} />}
              </div>

              <div className="articleBody" dangerouslySetInnerHTML={{ __html: article.content }} />

              <div className="articleFooter">
                <p>
                  <small>
                    Originally published on{" "}
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      The Guardian
                    </a>
                  </small>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
