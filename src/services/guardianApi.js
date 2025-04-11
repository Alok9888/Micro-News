import axios from "axios";

const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;
const BASE_URL = "https://content.guardianapis.com";

const guardianApi = axios.create({
  baseURL: BASE_URL,
  params: {
    "api-key": API_KEY,
    "show-fields": "thumbnail,headline,trailText,bodyText,byline,publication,shortUrl,lastModified",
  },
});

export const fetchArticles = async (params = {}) => {
  try {
    const response = await guardianApi.get("/search", {
      params: {
        ...params,
      },
    });
    return response.data.response.results.map((article) => ({
      id: article.id,
      title: article.fields.headline,
      description: article.fields.trailText,
      content: article.fields.bodyText,
      image: article.fields.thumbnail,
      url: article.webUrl,
      date: article.webPublicationDate,
    }));
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
    const article = response.data.response.content;
    return {
      id: article.id,
      title: article.fields.headline,
      description: article.fields.trailText,
      content: article.fields.bodyText,
      image: article.fields.thumbnail,
      url: article.webUrl,
      date: article.webPublicationDate,
      author: article.fields.byline || "The Guardian",
      lastModified: article.fields.lastModified,
      publication: article.fields.publication,
      shortUrl: article.fields.shortUrl,
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
};

export const fetchAwardArticles = (pageSize = 2) => {
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
  });
};
