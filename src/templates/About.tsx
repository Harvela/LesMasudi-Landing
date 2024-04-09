import { motion } from 'framer-motion';

import { LampContainer } from '@/components/lamp';

const AnimatedEnter: React.FC<{ children: any }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileFocus={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div id="about" className="relative z-[200] mt-10 md:mt-[-100px]">
      <div className="px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          <AnimatedEnter>
            <div className="flex max-h-[300px] flex-col items-center justify-center rounded-md border border-border bg-white p-4 text-center text-blue shadow-md shadow-blue/20">
              <h2 className="mb-8 text-[20px] font-semibold">
                Ecole Maternelle
              </h2>
              <p className="mb-8 text-[16px]">
                Nous offrons les options de 1ere A 3 eme maternelle en suivant
                Nous offrons les
              </p>
              <button className="mt-4 rounded-md border border-blue px-8 py-1 font-semibold text-blue">
                Prendre n rendez vous
              </button>
            </div>
          </AnimatedEnter>
          <AnimatedEnter>
            <div className="flex max-h-[300px] flex-col items-center justify-center rounded-md border border-border bg-white p-4 text-center text-blue shadow-md shadow-blue/20">
              <h2 className="mb-8 text-[20px] font-semibold">Ecole Primaire</h2>
              <p className="mb-8 text-[16px]">
                Nous offrons les options de 1ere A 3 eme maternelle en suivant
                Nous offrons les
              </p>
              <button className="mt-4 rounded-md border border-blue px-8 py-1 font-semibold text-blue">
                Prendre n rendez vous
              </button>
            </div>
          </AnimatedEnter>
          <AnimatedEnter>
            <div className="mt-0 flex flex-col items-center justify-center gap-4 rounded-md border border-blue/20 bg-blue p-2 text-center text-white shadow-md md:mt-[-60px] md:rounded-tl-[40px]">
              <div className="p-2">
                <h2 className="my-8 text-[20px] font-semibold">
                  Ecole Secondaire
                </h2>
                <p className="mb-8 text-[16px]">
                  Nous offrons les options de 1ere A 3 eme maternelle en suivant
                  Nous offrons les
                </p>
              </div>

              <div className="w-full rounded-md border border-blue/20 bg-white p-4 text-center shadow-md">
                <h3 className="mb-8 text-[18px] font-semibold text-black">
                  Nos sections
                </h3>
                <div className="grid grid-cols-2 gap-4 text-blue">
                  <div className="rounded-[10px] border bg-blue/10 p-1 text-[14px] text-blue">
                    Agronomie
                  </div>
                  <div className="rounded-[10px] border bg-blue/10 p-1 text-[14px] text-blue">
                    Technique social
                  </div>
                  <div className="rounded-[10px] border bg-blue/10 p-1 text-[14px] text-blue">
                    Coupe et couture
                  </div>
                </div>
              </div>
            </div>
          </AnimatedEnter>
        </div>
      </div>
      <div className=" my-10 rounded-[10px] px-8 md:my-20  lg:px-16">
        <AnimatedEnter>
          <h1 className="text-[25px] font-bold text-blue">A Propos de nous</h1>
          <div className="flex flex-col-reverse gap-2 pt-10 md:grid md:grid-cols-2 md:gap-10 md:pt-0">
            <p className=" mt-8 leading-10">
              Notre objectif est de rendre tout le monde heureux nous chaneons
              la maniere dont l educcation des enfants et nous travaillsons
              vaiment pour nous aider a etre wejkwjewke , parceque nous sommes
              touj ours wejnfwnfw lwewjenwe kwjewkejwne wkejwnewjen wjkenkwnf
              kwejfnwfj jwefnwkjfw kjwenfwf kjwnefwnf kwjefnw wkjenfw kwjefnwf
              wkejf wk fwfwf wkfjw fwkj fwkfjwkf wkjf wkf wf wfj w fwej ee wke
              fwkjfw kwjfwfnwkfnw kwjefnwfkwfjnw wkejfnwfw Notre objectif est de
              rendre tout le monde heureux nous chaneons la maniere dont l
              educcation des enfants et nous travaillsons vaiment pour nous
              aider a etre wejkwjewke , parceque nous sommes touj ours wejnfwnfw
              lwewjenwe kwjewkejwne wkejw
            </p>
            <img
              src="/assets/images/home/pupils.jpg"
              alt="about"
              className="h-[200px] w-full object-cover md:block md:h-[350px]"
            />
          </div>
        </AnimatedEnter>
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
