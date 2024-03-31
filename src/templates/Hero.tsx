import { Button } from 'flowbite-react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="mt-20 flex h-[100vh] flex-col bg-blue">
      <div className=" flex flex-row items-center justify-between p-16">
        <div className="w-[50%]">
          <h1 className="mt-4 text-[16px] font-semibold text-white lg:text-[48px]">
            Complexe Scolaire Lesmasudi
          </h1>
          <h2 className="my-[30px] text-[10px] text-white/80 md:text-[15px] lg:text-[32px]">
            L&apos;education de vos enfants au centre de notre action.
          </h2>
          <div className="mt-16 flex flex-col gap-8 md:flex-row">
            <Button
              color="white"
              className="font-sembibold h-[45px] w-[25%] bg-white text-blue md:self-end"
            >
              S&apos;inscrire
            </Button>

            <Button
              color="white"
              className="h-[45px] w-[25%] border border-white font-semibold text-white md:self-end"
            >
              Nous contacter
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/images/home/docta1.jpg"
              alt="Hero"
              className="h-[140px] w-[180px] rounded-lg"
            />
            <img
              src="/assets/images/home/docta3.jpg"
              alt="Hero"
              className="h-[140px] w-[180px] rounded-lg"
            />
          </div>
          <img
            src="/assets/images/home/docta2.jpg"
            alt="Hero"
            className="h-[140px] w-[180px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export { Hero };
