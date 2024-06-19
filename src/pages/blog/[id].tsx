// pages/blog/[id].tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getSingleArticle } from '@/components/hooks/subscribe';
import { Navbar } from '@/navigation/Navbar';
import { Footer } from '@/templates/Footer';

const BlogDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchArticles = async () => {
      if (id) {
        try {
          const result = await getSingleArticle(id as string);
          setData(result?.data);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      }
    };

    fetchArticles();
  }, [id]);

  return (
    <div className="h-[100vh] md:h-[95vh]">
      <div className="bg-blue">
        <Navbar />
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-blue px-8">
          <h1 className="m-auto mt-24 w-full py-10 text-[32px] font-semibold text-white md:max-w-[1000px]">
            {data?.attributes?.Titre}
          </h1>
        </div>
        <div className="mx-auto my-16 flex w-full flex-col items-center px-8 md:max-w-[1000px]">
          <img
            src={`https://admin.harvely.com${data?.attributes?.cover?.data?.attributes?.formats?.medium?.url}`}
            alt={data?.attributes?.Titre}
            className="h-[600px] w-full object-cover md:max-w-[1000px]"
          />
          <div
            className="ck-content my-8"
            dangerouslySetInnerHTML={{ __html: data?.attributes?.Content }}
          />
          {/* <div className="m-auto flex flex-col items-center justify-center">
            <h1 className="my-12 text-[32px] font-bold">AUTEURS</h1>
            <div className="flex flex-row flex-wrap items-center justify-between gap-8 md:gap-16">
              {Object.values(data?.attributes?.team).map((author, authorIndex) => (
                <div
                  key={authorIndex}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <img
                    src={author.photo}
                    alt={author.name}
                    className="h-20 w-20 rounded-full object-cover md:h-40 md:w-40"
                  />
                  <div className="mt-4 flex flex-col items-center justify-center">
                    <p className="mb-1 text-[12px] font-bold md:text-[20px]">
                      {author.name}
                    </p>
                    <p className="text-[11px] text-black/60 md:text-[14px]">
                      {author.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
