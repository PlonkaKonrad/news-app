import fetchNews from "@/lib/fetchNews";
import NewsList from "@/app/NewsList";
import { categories } from "@/constants";

type Props = {
  params: {
    category: Category;
  };
};

async function NewsPage({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsPage;

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}
