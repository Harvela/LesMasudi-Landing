import { galery } from '@/utils/galery';

const Galery = () => {
  return (
    <div id="galery" className="relative z-20 px-8 py-5 lg:px-16">
      <div className="rounded-md">
        <h1 className="mb-2 text-lg font-bold text-blue lg:text-xl">
          GALLERIE
        </h1>
        <div className="h-[4px] w-[4%] bg-blue" />
        <div className="my-16 grid grid-cols-1 gap-8 text-blue md:grid-cols-3">
          {galery.map((g, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-md border border-blue/20 p-8 shadow-md"
            >
              <img src={g.icon} alt={`${g.name}`} className="h-30 w-30 mb-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Galery };
