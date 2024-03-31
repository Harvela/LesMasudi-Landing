const Options = () => {
  return (
    <div id="projects" className="relative h-[80vh]">
      <img
        src="/assets/images/home/background.png"
        alt="Hero"
        className="size-full object-cover"
      />
      <div className="absolute left-0 top-0 flex size-full flex-row items-center gap-16 bg-blue/60 p-16">
        <div className="flex w-[30%] flex-col items-center gap-8">
          <div className="rounded-md bg-blue p-8 text-start text-white">
            <h2 className="mb-6 font-semibold">ECOLE MATERNELLE</h2>
            <p>Nous offrons les options de 1ere en 6ieme primaire en suivant</p>
          </div>

          <div className="gap-4 rounded-md bg-[#9B7F1B] p-8 text-start text-white">
            <h2 className="mb-6 font-semibold">ECOLE MATERNELLE</h2>
            <p>Nous offrons les options de 1ere en 6ieme primaire en suivant</p>
          </div>
        </div>
        <div className="w-[70%] rounded-md border border-blue/20 bg-[#B31C1C] p-16 text-white shadow-md">
          <h2 className="mb-6 font-semibold">ECOLE MATERNELLE</h2>
          <p>
            Subdivise en CTB () et Humanites (). En humanite nous offrons
            plusieurs sections repris ci dessous
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="rounded-md bg-white py-2 text-center font-semibold text-[#B31C1C]">
              AGRONOMIE
            </div>

            <div className="rounded-md bg-white py-2 text-center font-semibold text-[#B31C1C]">
              AGRONOMIE
            </div>

            <div className="rounded-md bg-white py-2 text-center font-semibold text-[#B31C1C]">
              AGRONOMIE
            </div>

            <div className="rounded-md bg-white py-2 text-center font-semibold text-[#B31C1C]">
              AGRONOMIE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Options };
