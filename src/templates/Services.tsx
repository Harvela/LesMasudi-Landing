import { services } from '@/utils/services';

const Services = () => {
  return (
    <div id="services" className="relative z-20 px-4 py-8 lg:px-16">
      <h1 className="mb-2 mt-5 text-lg font-bold text-blue lg:text-xl">
        NOS SERVICES
      </h1>
      <div className="h-[4px] w-[4%] bg-blue" />
      <div className="my-20 grid grid-cols-3 gap-16">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-8 rounded-md bg-blue px-8 py-16 text-center font-semibold text-white"
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
  );
};

export { Services };
