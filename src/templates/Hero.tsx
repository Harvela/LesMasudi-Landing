import { Button } from 'flowbite-react';
import React from 'react';

import { BackgroundBeams } from '@/components/background-beams';
import { InfiniteMovingImages } from '@/components/image-slider';

const Hero: React.FC = () => {
  return (
    <div id="home" className="flex h-[95vh] flex-col bg-blue">
      <div className=" flex h-full flex-col items-center justify-between md:flex-row">
        <div className="ml-16 mt-40 w-full md:mt-0 md:w-[40%]">
          <h1 className="mt-4 text-[32px] font-semibold text-white lg:text-[40px]">
            Complexe Scolaire
            <br /> Lesmasudi
          </h1>
          <h2 className="my-[30px] text-[18px] text-white/80 md:text-[15px] lg:text-[25px]">
            L&apos;education de vos enfants au centre de notre action.
          </h2>
          <div className="mt-16 flex flex-col gap-8 md:flex-row">
            <Button
              color="white"
              className="font-sembibold h-[45px] w-[30%] bg-white text-blue md:self-end"
            >
              S&apos;inscrire
            </Button>

            <Button
              color="white"
              className="hidden h-[45px] w-[30%] border border-white font-semibold text-white md:block md:self-end"
            >
              Nous contacter
            </Button>
          </div>
        </div>
        <div className="flex h-full w-full grow flex-row items-center md:w-[60%]">
          <img
            src="/assets/images/home/sub-bg.svg"
            alt="Hero"
            className="absolute z-[100] mt-[-80] w-[71%] rotate-90 md:h-[95vh] md:w-[24%] md:rotate-0"
          />
          <img
            src="/assets/images/home/pupils.jpg"
            alt="Hero"
            className="z-[10] mt-[400px] md:hidden"
          />
          <InfiniteMovingImages
            className="z-[50] hidden h-full w-full md:block"
            items={[
              '/assets/images/home/pupils.jpg',
              '/assets/images/home/pupils.jpg',
            ]}
          ></InfiniteMovingImages>
        </div>
      </div>
      <BackgroundBeams className="z-[200] max-h-[95vh] max-w-[60vw]" />
    </div>
  );
};

export { Hero };
