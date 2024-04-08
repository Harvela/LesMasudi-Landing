import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { team } from '@/utils/team';

const Blog = () => {
  return (
    <div id="blog" className="relative z-20 bg-blue px-8 py-10 lg:px-16">
      <div className="rounded-md">
        <h1 className="mb-2 text-lg font-bold text-white lg:text-xl">
          BLOG ET DERNIERES INFOS
        </h1>
        <div className="h-[4px] w-[4%] bg-white" />
        <div className="my-20 grid grid-cols-1 gap-8 text-blue md:grid-cols-2">
          {team.map((t, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center gap-8 rounded-md border border-blue/20 bg-white p-8 shadow-md"
            >
              <img
                src={t.icon}
                alt={`${t.name}`}
                className="mb-8 h-full w-[40%]"
              />
              <div>
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-semibold">{t.name}</h2>
                  <span className="rounded-[8px] bg-blue/10 px-4 py-1 text-[8px] text-blue">
                    {t.role}
                  </span>
                </div>
                <p className="my-8 text-[10px]">{t.description}</p>
                <div className="flex flex-row items-center gap-4">
                  <Link href={t.linkedin}>
                    <FaLinkedin />
                  </Link>
                  <Link href={t.twitter}>
                    <FaSquareXTwitter />
                  </Link>
                  <Link href={t.gmail}>
                    <MdEmail />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Blog };
