import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getArticles } from '@/components/hooks/subscribe';

const truncateText = (text: string, limit: number) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return `${words.slice(0, limit).join(' ')}...`;
  }
  return text;
};

const Blog = () => {
  const [articles, setArticles] = useState<any[]>([]); // Initialize as an empty array

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        console.log(data);
        if (Array.isArray(data)) {
          setArticles(data);
        } else if (data && data.data && Array.isArray(data.data)) {
          // Adjust based on the actual structure of your API response
          setArticles(data.data);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages: JSX.Element[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            className={`mx-1 rounded-sm px-3 py-1 text-sm font-medium ${
              i === currentPage
                ? 'bg-gray-900 px-6 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>,
        );
      } else if (
        (i === currentPage - 2 || i === currentPage + 2) &&
        i !== 1 &&
        i !== totalPages
      ) {
        pages.push(
          <span key={i} className="text-md mx-1 px-3 py-1 text-gray-400">
            ...
          </span>,
        );
      }
    }
    return pages;
  };

  return (
    <div id="blog" className="relative z-20 bg-blue px-8 py-10 lg:px-16">
      <div className="rounded-md">
        <h1 className="mb-2 text-lg font-bold text-white lg:text-xl">
          BLOG ET DERNIERES INFOS
        </h1>
        <div className="h-[4px] w-[4%] bg-white" />
        <div className="my-20 grid grid-cols-1 gap-8 text-blue md:grid-cols-3 lg:grid-cols-4">
          {getCurrentPageData().length > 0 ? (
            getCurrentPageData().map((article: any, index: number) => (
              <div
                key={index}
                className="overflow-hidden rounded border bg-white transition-all hover:scale-105 hover:shadow-sm"
              >
                <img
                  src={`https://admin.harvely.com${article.attributes?.cover?.data?.attributes?.formats?.small?.url}`} // Assuming the image URL is under attributes
                  alt={article.attributes?.Titre}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between text-[12px] text-[#6a6a6a]">
                    <span>{article.attributes?.author.name}</span>
                    {/* <span>{date}</span> */}
                  </div>
                  <h3 className="text-md font-semibold text-[#303030]">
                    {article.attributes?.Titre}
                  </h3>
                  <p className="mt-4 text-[13px] font-light leading-[22px] text-[#818181]">
                    {truncateText(article.attributes?.description ?? '', 20)}
                  </p>
                  <Link
                    href={`/blog/${article.id}`}
                    className="text-blue-900 hover:text-blue-600 mt-4 inline-block text-sm font-medium hover:underline"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No articles available.</p>
          )}
        </div>
        <div className="mt-8 flex justify-center">{renderPagination()}</div>
      </div>
    </div>
  );
};

export { Blog };
