type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type Article = {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
