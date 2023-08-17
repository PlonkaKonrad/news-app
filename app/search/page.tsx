type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  //   const news: NewsResponse = await fetchNews();

  return (
    <div>
      <h1 className="headerTitle">{searchParams?.term}</h1>
      {/* <NewsList news={news} /> */}
      <div className="w-full p-6 flex justify-center items-center bg-slate-200 mt-10 text-black">
        <p>404 | This page could not be found</p>
      </div>
    </div>
  );
}

export default SearchPage;
