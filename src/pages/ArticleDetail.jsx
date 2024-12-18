import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Loading from "../components/Loading";
import "video.js/dist/video-js.css";
import videojs from "video.js";

const parseMarkdownWithMetadata = (fileContent) => {
  // Regex to match the metadata block, capturing all lines inside it
  const metaRegex = /^---([\s\S]*?)---/;
  const match = fileContent.match(metaRegex);

  if (match) {
    const metadataBlock = match[1]; // Extract the metadata block content
    const metadataLines = metadataBlock.trim().split("\n"); // Split into lines, trimming whitespace

    // Process each line to build the metadata object
    const metadata = metadataLines.reduce((acc, line) => {
      const [key, ...value] = line.split(":");
      acc[key.trim()] = value.join(":").trim().replace(/['"]+/g, ""); // Clean up quotes
      return acc;
    }, {});

    const markdown = fileContent.replace(metaRegex, "").trim(); // Extract markdown content
    return { metadata, markdown };
  }

  return { metadata: null, markdown: fileContent };
};

const ArticleDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const loadArticleContent = async () => {
      try {
        // Use import.meta.glob to import all markdown files in the folder
        const markdownFiles = import.meta.glob("../content/articles/*.md", { query: "?raw", import: "default" });

        // Find the matching file
        const fileKey = Object.keys(markdownFiles).find((file) => file.includes(`/${id}.md`));

        if (fileKey) {
          const fileContent = await markdownFiles[fileKey]();
          const { metadata, markdown } = parseMarkdownWithMetadata(fileContent);
          setMeta(metadata);
          setContent(markdown);
        } else {
          console.error("Markdown file not found for ID:", id);
        }
      } catch (error) {
        console.error("Error loading article:", error);
      }
    };

    loadArticleContent();
  }, [id]);

  useEffect(() => {
    if (meta && meta.title) {
      document.title = meta.title;
    }
  }, [meta]);

  // Initialize Video.js for dynamically rendered videos
  useEffect(() => {
    const initializeVideoJS = () => {
      const videoElements = document.querySelectorAll(".video-js");
      videoElements.forEach((video) => {
        if (!videojs.players[video.id]) {
          videojs(video);
        }
      });
    };

    initializeVideoJS();
  }, [content]);

  if (!content) {
    console.log("Content is loading...");
    return <Loading />;
  }

  return (
    <section className="block articleSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <article className="articleBlock">
              {/* Render metadata if available */}
              {meta && (
                <div className="articleHeader">
                  <h2>{meta.title}</h2>

                  {meta.author && (
                    <span>
                      {meta.author} | {meta.date}
                    </span>
                  )}

                  <div className="articleMedia">
                    {meta.imgSrc && <img src={meta.imgSrc} alt={meta.title} className="w-100" />}

                    {meta.videoSrc && (
                      <video id="meta-video" className="video-js vjs-fluid" controls preload="auto" data-setup="{}">
                        <source src={meta.videoSrc} type="application/x-mpegURL" />
                      </video>
                    )}
                  </div>

                  {meta.quote && <blockquote>{meta.quote}</blockquote>}
                </div>
              )}
              {/* Render markdown content */}
              <div className="articleBody">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
