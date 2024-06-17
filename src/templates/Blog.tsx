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

  return (
    <div id="blog" className="relative z-20 bg-blue px-8 py-10 lg:px-16">
      <div className="rounded-md">
        <h1 className="mb-2 text-lg font-bold text-white lg:text-xl">
          BLOG ET DERNIERES INFOS
        </h1>
        <div className="h-[4px] w-[4%] bg-white" />
        <div className="my-20 grid grid-cols-1 gap-8 text-blue md:grid-cols-2">
          {articles.length > 0 ? (
            articles.map((article: any, index: number) => (
              <div
                key={index}
                className="flex flex-col rounded-md border border-blue/20 bg-white text-black shadow-md md:flex-row"
              >
                <img
                  src={`https://admin.harvely.com${article.attributes?.cover?.data?.attributes?.formats?.small?.url}`} // Assuming the image URL is under attributes
                  alt={article.attributes?.Titre}
                  className="h-[320px] w-full rounded-l-md object-cover md:w-[50%]"
                />
                <div className="p-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="mb-2 text-[16px] font-bold">
                      {article.attributes?.Titre}
                    </h2>
                    <div className="mb-4 flex flex-row items-center gap-1">
                      {article.attributes?.team?.map(
                        (author: any, authorIndex: number) => (
                          <img
                            key={authorIndex}
                            src={author.photo}
                            alt={author.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ),
                      )}
                    </div>
                  </div>
                  <p className="my-4 text-[12px]">
                    {truncateText(article.attributes?.description ?? '', 20)}
                  </p>
                  <Link href={`/blog/${article.id}`}>
                    <button className="rounded-md bg-blue px-2 py-1 text-[10px] text-white">
                      Voir plus
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No articles available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { Blog };
