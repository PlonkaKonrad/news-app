import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";

async function HomePage() {
  const news: NewsResponse = await fetchNews();

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
