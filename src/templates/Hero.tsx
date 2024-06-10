import React from 'react';

import { BackgroundBeams } from '@/components/background-beams';
import { Contact } from '@/components/contact';
import Dialog from '@/components/dialog';
import { InfiniteMovingImages } from '@/components/image-slider';
import { Subscribe } from '@/components/subscribe';

const Hero: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [showSubscribeForm, setShowSubscribeForm] = React.useState(false);
  const [message, setMessage] = React.useState('');
  return (
    <div id="home" className="flex h-[100vh] flex-col bg-blue md:h-[95vh]">
      {showContactForm && (
        <Dialog
          onClose={() => {
            setShowContactForm(false);
          }}
          isForm
          width="md:w-[50%] sm:w-[95%] overflow-y-scroll max-h-[80%]"
        >
          <Contact
            message={message}
            onClose={() => setShowContactForm(false)}
          />
        </Dialog>
      )}
      {showSubscribeForm && (
        <Dialog
          onClose={() => {
            setShowSubscribeForm(false);
          }}
          isForm
          width="md:w-[50%] sm:w-[95%] overflow-y-scroll max-h-[80%]"
        >
          <Subscribe onClose={() => setShowSubscribeForm(false)} />
        </Dialog>
      )}
      <div className=" flex h-full flex-col items-center justify-normal md:flex-row md:justify-between">
        <div className="z-[800] ml-16 mt-40 h-[60vh] w-full md:mt-0 md:h-auto md:w-[40%]">
          <h1 className="mt-4 text-[32px] font-semibold text-white lg:text-[40px]">
            Complexe Scolaire
            <br /> Lesmasudi
          </h1>
          <h2 className="my-[30px] mr-8 text-[18px] text-white/80 md:text-[15px] lg:text-[25px]">
            L&apos;education de vos enfants au centre de notre action.
          </h2>
          <div className="mt-16 flex flex-row gap-8">
            <button
              className="font-sembibold h-[45px] w-[30%] rounded-lg bg-white font-semibold text-blue md:self-end"
              onClick={() => {
                setShowSubscribeForm(true);
                setMessage(``);
              }}
            >
              S&apos;inscrire
            </button>

            <button
              color="white"
              className="h-[45px] w-[30%] rounded-lg border border-white font-semibold text-white md:block md:self-end"
              onClick={() => {
                setShowContactForm(true);
                setMessage(``);
              }}
            >
              Nous contacter
            </button>
          </div>
        </div>
        <div className="flex h-[40vh] w-full grow flex-row items-center bg-blue md:h-full md:w-[60%]">
          <img
            src="/assets/images/home/sub-bg.svg"
            alt="Hero"
            className="absolute z-[100] mt-[-30vh] hidden w-[100vw] rotate-90 md:mt-[0px] md:block md:h-[95vh] md:w-auto md:rotate-0"
          />
          <InfiniteMovingImages
            className="z-[50] h-full w-full"
            items={[
              'https://admin.harvely.com/uploads/Whats_App_Image_2024_04_17_at_09_08_32_0fb12bbdd4.jpeg',
              'https://admin.harvely.com/uploads/Whats_App_Image_2024_04_17_at_09_08_34_1_53d0aaf3ec.jpeg',
              '/assets/images/home/pupil4.jpg',
            ]}
          ></InfiniteMovingImages>
        </div>
      </div>
      <BackgroundBeams className="z-[200] max-h-[95vh] max-w-[60vw]" />
    </div>
  );
};

export { Hero };
