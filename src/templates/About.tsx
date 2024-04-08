import { motion } from 'framer-motion';

import { LampContainer } from '@/components/lamp';

const About = () => {
  return (
    <div id="about" className="relative z-[200] mt-[-100px]">
      <div className="px-4 lg:px-16">
        <div className="grid grid-cols-3 gap-16">
          <div className="flex max-h-[300px] flex-col items-center justify-center gap-4 rounded-md border border-blue/20 bg-white py-16 font-semibold text-blue shadow-md">
            <h2>Turunga, Nyiragongo 4500</h2>
            <h2>Goma, DRC.</h2>
            <button className="mt-4 rounded-md border border-blue px-8 py-1 font-semibold text-blue">
              Directions
            </button>
          </div>

          <div className="flex max-h-[300px] flex-col items-center justify-center gap-4 rounded-md border border-blue/20 bg-white py-16 font-semibold text-blue shadow-md">
            <h2>Turunga, Nyiragongo 4500</h2>
            <h2>Goma, DRC.</h2>
            <button className="mt-4 rounded-md border border-blue px-8 py-1 font-semibold text-blue">
              Directions
            </button>
          </div>

          <div className="mt-[-40px] flex flex-col items-center justify-center gap-4 rounded-md border border-blue/20 bg-blue py-16 font-semibold text-white shadow-md">
            <h2>Turunga, Nyiragongo 4500</h2>
            <h2>
              Goma, DRC. lkmwlfmwfkwlf lwkemflwkf lwkefmwlkfmwf lkwefmwlkfmw
              lwkefmwlfkw lwkefmwlfkmw
            </h2>
            <button className="mt-4 rounded-md border border-white px-8 py-1 font-semibold text-white">
              Directions
            </button>
            <button className="mt-4 rounded-md border border-white px-8 py-1 font-semibold text-white">
              Directions
            </button>
          </div>
        </div>
      </div>
      <div className=" my-40 rounded-[10px] px-4  lg:px-16">
        <h1 className="text-[25px] font-bold text-blue">A Propos de nous</h1>
        <div className="grid grid-cols-2 gap-10">
          <p className=" mt-8 leading-10">
            Notre objectif est de rendre tout le monde heureux nous chaneons la
            maniere dont l educcation des enfants et nous travaillsons vaiment
            pour nous aider a etre wejkwjewke , parceque nous sommes touj ours
            wejnfwnfw lwewjenwe kwjewkejwne wkejwnewjen wjkenkwnf kwejfnwfj
            jwefnwkjfw kjwenfwf kjwnefwnf kwjefnw wkjenfw kwjefnwf wkejf wk
            fwfwf wkfjw fwkj fwkfjwkf wkjf wkf wf wfj w fwej ee wke fwkjfw
            kwjfwfnwkfnw kwjefnwfkwfjnw wkejfnwfw Notre objectif est de rendre
            tout le monde heureux nous chaneons la maniere dont l educcation des
            enfants et nous travaillsons vaiment pour nous aider a etre
            wejkwjewke , parceque nous sommes touj ours wejnfwnfw lwewjenwe
            kwjewkejwne wkejw
          </p>
          <img
            src="/assets/images/home/pupils.jpg"
            alt="about"
            className="h-[350px] w-full object-cover"
          />
        </div>
      </div>
      <div className="bg-primary">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: 'easeInOut',
            }}
            className="md:text-7xl mt-8 bg-gradient-to-br from-white to-white/60 bg-clip-text py-4 pt-[100px] text-center text-4xl font-medium tracking-tight text-transparent"
          >
            <span className="pt-[100px]">
              Notre devise <br /> Education, Famille et Travail.
            </span>
          </motion.h1>
        </LampContainer>
      </div>
    </div>
  );
};

export { About };
