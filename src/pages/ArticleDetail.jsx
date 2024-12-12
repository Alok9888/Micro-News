import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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
    // console.log("Metadata:", metadata);
    // console.log("Markdown content:", markdown);
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
        const filePath = new URL(`../content/articles/${id}.md`, import.meta.url).pathname;
        console.log("Fetching article from:", filePath);
        const fileContent = await fetch(filePath).then((res) => res.text());

        const { metadata, markdown } = parseMarkdownWithMetadata(fileContent);
        setMeta(metadata);
        setContent(markdown);
      } catch (error) {
        console.error("Error loading article:", error);
      }
    };

    loadArticleContent();
  }, [id]);

  if (!content) {
    console.log("Content is loading...");
    return <h2>Loading...</h2>;
  }

  // console.log("Metadata:", meta);
  // console.log("Markdown content:", content);

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
                      <div className="ratio ratio-16x9">
                        <video controls>
                          <source src={meta.videoSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>

                  {meta.quote && <blockquote>{meta.quote}</blockquote>}
                </div>
              )}
              {/* Render markdown content */}
              <div className="articleBody">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
