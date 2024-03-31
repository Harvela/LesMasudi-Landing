import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { team } from '@/utils/team';

const Team = () => {
  return (
    <div id="team" className="relative z-20 px-4 py-10 lg:px-16">
      <div className="rounded-md p-8">
        <h1 className="mb-2 text-lg font-bold text-blue lg:text-xl">
          NOTRE EQUIPE
        </h1>
        <div className="h-[4px] w-[4%] bg-blue" />
        <div className="my-20 grid grid-cols-4 gap-8 text-blue">
          {team.map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-md border border-blue/20 p-8 shadow-md"
            >
              <img
                src={t.icon}
                alt={`${t.name}`}
                className="h-30 w-30 mb-8 rounded-full"
              />
              <div className="flex flex-col items-center gap-2">
                <h2 className="font-semibold">{t.name}</h2>
                <span className="rounded-[8px] bg-blue/10 px-4 py-1 text-[8px] text-blue">
                  {t.role}
                </span>
              </div>
              <p className="my-8 text-center text-[10px]">{t.description}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export { Team };
