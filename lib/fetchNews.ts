const fetchNews = async (category?: Category | string) => {
  const response = await fetch(
    category
      ? `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      : "https://saurav.tech/NewsAPI/everything/cnn.json",
    {
      method: "GET",
      next: { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const newsResponse = await response.json();

  return newsResponse;
};

export default fetchNews;
