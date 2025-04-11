import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopStories } from "../services/guardianApi";

const Intro = () => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopStory = async () => {
      try {
        const [data] = await fetchTopStories(1);
        if (data) {
          setStory(data);
        }
      } catch (error) {
        console.error("Error loading top story:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTopStory();
  }, []);

  if (loading) {
    return (
      <section className="introVideo" id="rewind">
        <div className="container">
          <div>Loading top story...</div>
        </div>
      </section>
    );
  }

  if (!story) {
    return null;
  }

  return (
    <section className="introVideo" id="rewind">
      <div className="top-story">
        {story.image && <img src={story.image} alt={story.title} className="top-story-image" />}
        <div className="top-story-content">
          <h1>{story.title}</h1>
          <p>{story.description}</p>
          <Link to={`/article/${story.id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
