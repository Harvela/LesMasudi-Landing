import { galery } from '@/utils/galery';

const Galery = () => {
  return (
    <div id="galery" className="relative z-20 px-8 py-5 lg:px-16">
      <div className="rounded-md">
        <h1 className="mb-2 text-lg font-bold text-blue lg:text-xl">
          GALLERIE
        </h1>
        <div className="h-[4px] w-[4%] bg-blue" />
        <div className="my-16 grid grid-cols-2 gap-8 text-blue md:grid-cols-3">
          {galery.map((g, index) => (
            <img
              key={index}
              src={g.icon}
              alt=""
              className="h-[300px] w-[500px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Galery };
