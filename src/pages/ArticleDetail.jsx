import React, { useEffect, useState } from "react";
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
    console.log("Metadata:", metadata);
    console.log("Markdown content:", markdown);
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

  console.log("Metadata:", meta);
  console.log("Markdown content:", content);

  return (
    <article>
      {/* Render metadata if available */}
      {meta && (
        <header>
          <h1>{meta.title}</h1>
          <p>
            <strong>Author:</strong> {meta.author} | <strong>Date:</strong> {meta.date}
          </p>
          {meta.imgSrc && <img src={meta.imgSrc} alt={meta.title} />}
          {meta.quote && <blockquote>{meta.quote}</blockquote>}
        </header>
      )}
      {/* Render markdown content */}
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default ArticleDetail;
