import Link from 'next/link';

import { blog } from '@/utils/blog';

const truncateText = (text: string, limit: any) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return `${words.slice(0, limit).join(' ')}...`;
  }
  return text;
};

const Blog = () => {
  return (
    <div id="blog" className="relative z-20 bg-blue px-8 py-10 lg:px-16">
      <div className="rounded-md">
        <h1 className="mb-2 text-lg font-bold text-white lg:text-xl">
          BLOG ET DERNIERES INFOS
        </h1>
        <div className="h-[4px] w-[4%] bg-white" />
        <div className="my-20 grid grid-cols-1 gap-8 text-blue md:grid-cols-2">
          {blog.map((b, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-8 rounded-md border border-blue/20 bg-white text-black shadow-md md:flex-row"
            >
              <img
                src={b.image}
                alt={`${b.title}`}
                className="h-full w-full rounded-l-md object-cover md:w-[40%]"
              />
              <div className="px-2 py-6">
                <div className="flex flex-col items-start gap-2">
                  <h2 className="mb-2 text-[16px] font-bold">{b.title}</h2>
                  <div className="flex flex-row items-center gap-1">
                    {Object.values(b.team).map((author, authorIndex) => (
                      <img
                        key={authorIndex}
                        src={author.photo}
                        alt={author.name}
                        className="h-10 w-10 rounded-full"
                      />
                    ))}
                  </div>
                </div>
                <p className="my-4 text-[12px]">
                  {truncateText(b.description1, 20)}
                </p>
                <Link href={`/blog/${b.id}`}>
                  <button className="rounded-md bg-blue px-2 py-1 text-[10px] text-white">
                    Voir plus
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Blog };
