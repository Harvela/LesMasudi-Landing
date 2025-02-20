// import Link from 'next/link';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaSquareXTwitter } from 'react-icons/fa6';
// import { MdEmail } from 'react-icons/md';

import { useState } from 'react';

import { team } from '@/utils/team';

const Team = () => {
  const [selectedId, setSelectedId] = useState<number>(3);

  return (
    <div className="flex flex-col bg-[#003a8f]/10 px-4 pt-16 md:px-8 lg:px-16">
      <h1 className="mb-2 text-lg font-bold text-blue lg:text-xl">
        NOTRE EQUIPE
      </h1>
      <div className="mb-5 h-[4px] w-[4%] bg-blue" />
      <section className="mt-16 flex flex-col items-center">
        <div className="flex w-full flex-col gap-2 md:flex-row md:items-end">
          {team.map((t) => (
            <div
              key={t.id}
              onClick={() => setSelectedId(t.id)}
              className={`relative flex w-full cursor-pointer flex-col items-center justify-between px-2 py-6 transition-all duration-300 md:rounded-t-xl
              ${
                selectedId === t.id
                  ? 'bg-[#003a8f] text-white'
                  : 'bg-[#003a8f]/20 hover:bg-[#003a8f] hover:text-white hover:opacity-100'
              } `}
            >
              <img
                src={t.icon}
                alt={t.name}
                className={`mb-2 rounded-full border-2 object-cover transition-all duration-300
                ${selectedId === t.id ? 'size-[120px]' : 'size-[80px]'}
              `}
              />
              <h3
                className={`mb-2 text-center font-medium tracking-[.1rem] transition-all duration-300 ${
                  selectedId === t.id ? 'text-[18px]' : 'text-[14px] '
                } group-hover:text-white`}
              >
                {t.name}
              </h3>
              <p
                className={`font-regular text-center font-light transition-all duration-300 ${
                  selectedId === t.id ? 'text-[16px]' : 'text-[14px] '
                } group-hover:text-white`}
              >
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { Team };
