import { services } from '@/utils/services';

const Options = () => {
  return (
    <div id="projects" className="relative h-[80vh]">
      <img
        src="/assets/images/home/background.png"
        alt="Hero"
        className="size-full object-cover"
      />
      <div className="absolute left-0 top-0 flex size-full flex-row items-center gap-16 bg-blue/60 p-16">
        <div>
          <h1 className="z-40 mb-2 mt-5 text-center text-lg font-bold text-white lg:text-xl">
            NOS SERVICES
          </h1>
          <div className="mx-auto h-[4px] w-[4%] bg-white" />
          <div className="my-20 grid grid-cols-3 gap-16">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center gap-8 rounded-md  border-[1px] border-white ${
                    index === 1 ? 'bg-red-800' : 'bg-blue'
                  } px-8 py-16 text-center font-semibold text-white`}
                >
                  <h2 className="text-lg">{service.name}</h2>

                  <p className="text-md">{service.description}</p>

                  <button className="corder-white mt-2 rounded-md border px-8 py-2">
                    Les modalites
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Options };
