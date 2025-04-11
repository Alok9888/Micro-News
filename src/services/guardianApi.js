import axios from "axios";

const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;
const BASE_URL = "https://content.guardianapis.com";

const guardianApi = axios.create({
  baseURL: BASE_URL,
  params: {
    "api-key": API_KEY,
    "show-fields": "thumbnail,headline,trailText,body,byline,publication,shortUrl,lastModified,main",
  },
});

// Helper function to get the best available image
const getBestImage = (fields) => {
  // Try to get the highest quality image available
  if (fields.main && fields.main.assets && fields.main.assets.length > 0) {
    // Sort assets by width (descending) to get the highest resolution
    const sortedAssets = [...fields.main.assets].sort((a, b) => b.width - a.width);
    return sortedAssets[0].file;
  }

  // Fallback to thumbnail if main image is not available
  if (fields.thumbnail) {
    // Replace the resolution parameter in the URL with a higher value (1000)
    return fields.thumbnail.replace(/\/\d+\.jpg$/, "/1000.jpg");
  }

  return null;
};

// Helper function to ensure high resolution images
const ensureHighResImage = (imageUrl, useHighRes = false) => {
  if (!imageUrl) return null;
  // Replace the resolution parameter in the URL with a higher value (1000 or 2000)
  return imageUrl.replace(/\/\d+\.jpg$/, useHighRes ? "/2000.jpg" : "/1000.jpg");
};

export const fetchArticles = async (params = {}) => {
  try {
    const response = await guardianApi.get("/search", {
      params: {
        ...params,
      },
    });
    const results = response.data.response.results.map((article) => ({
      id: article.id,
      title: article.fields.headline,
      description: article.fields.trailText,
      content: article.fields.bodyText,
      image: ensureHighResImage(getBestImage(article.fields)),
      url: article.webUrl,
      date: article.webPublicationDate,
      author: article.fields.byline || "The Guardian",
    }));

    // Ensure we only return the requested number of articles
    return results.slice(0, params.pageSize || 10);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

export const fetchFeaturedArticles = (pageSize = 6) => {
  return fetchArticles({ pageSize });
};

export const fetchRewindArticles = (pageSize = 8) => {
  return fetchArticles({
    pageSize,
    "order-by": "relevance",
  });
};

export const fetchArticleById = async (articleId) => {
  try {
    const response = await guardianApi.get(`/${articleId}`);
    console.log("Raw Guardian API Response:", response.data);
    const article = response.data.response.content;
    console.log("Article Fields:", article.fields);

    const processedArticle = {
      id: article.id,
      title: article.fields.headline,
      description: article.fields.trailText,
      content: article.fields.body,
      image: ensureHighResImage(getBestImage(article.fields), true), // Use high resolution (2000)
      url: article.webUrl,
      date: article.webPublicationDate,
      author: article.fields.byline || "The Guardian",
      lastModified: article.fields.lastModified,
      publication: article.fields.publication,
      shortUrl: article.fields.shortUrl,
    };

    // console.log("Processed Article Data:", processedArticle);
    return processedArticle;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
};

export const fetchAwardArticles = (pageSize = 12) => {
  return fetchArticles({
    pageSize,
    q: "awards OR recognition OR achievement",
    "order-by": "relevance",
  });
};

export const fetchMediaContent = (pageSize = 10) => {
  return fetchArticles({
    pageSize,
    tag: "type/gallery,type/picture",
    "show-fields": "thumbnail,headline,trailText,byline,main",
    "show-elements": "image",
    "order-by": "newest",
    // Remove production-office filter for broader results
  });
};

export const fetchTopStories = (pageSize = 1) => {
  return fetchArticles({
    pageSize,
    tag: "tone/news",
    "show-fields": "thumbnail,headline,trailText,bodyText,byline,main,starRating",
    "order-by": "newest",
  }).then((articles) => {
    // For top stories (used in Intro), use high resolution images
    return articles.map((article) => ({
      ...article,
      image: ensureHighResImage(article.image, true), // Use high resolution (2000)
    }));
  });
};
