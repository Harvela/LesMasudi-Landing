import { Button } from 'flowbite-react';
import React from 'react';

import { BackgroundBeams } from '@/components/background-beams';
import { InfiniteMovingImages } from '@/components/image-slider';

const Hero: React.FC = () => {
  return (
    <div id="home" className="flex h-[95vh] flex-col bg-blue">
      <div className=" flex h-full flex-row items-center justify-between">
        <div className="ml-16 w-[40%]">
          <h1 className="mt-4 text-[16px] font-semibold text-white lg:text-[40px]">
            Complexe Scolaire
            <br /> Lesmasudi
          </h1>
          <h2 className="my-[30px] text-[10px] text-white/80 md:text-[15px] lg:text-[25px]">
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
        <div className="flex h-full w-[60%] grow flex-row items-center">
          <img
            src="/assets/images/home/sub-bg.svg"
            alt="Hero"
            className="absolute z-[100] h-[95vh]"
          />
          <InfiniteMovingImages
            className="z-[50] h-full w-full"
            items={[
              '/assets/images/home/pupils.jpg',
              '/assets/images/home/pupils.jpg',
            ]}
          ></InfiniteMovingImages>
          {/* <img
            src="/assets/images/home/pupils.jpg"
            alt="Hero"
            className="h-full w-[full] object-cover "
          /> */}
        </div>
      </div>
      <BackgroundBeams className="z-[200] max-h-[95vh] max-w-[60vw]" />
    </div>
  );
};

export { Hero };
