import { motion } from 'framer-motion';
import React from 'react';

import Dialog from '@/components/dialog';
import { LampContainer } from '@/components/lamp';
import { Subscribe } from '@/components/subscribe';

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
  const [showSubscribeForm, setShowSubscribeForm] = React.useState(false);
  return (
    <div id="about" className="relative z-[200] mt-10">
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
      <div className="px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          <AnimatedEnter>
            <div className="flex h-full flex-col items-center justify-center rounded-md border border-border bg-white p-8 text-center text-blue shadow-md shadow-blue/20">
              <h2 className="text-[20px] font-semibold">Ecole Maternelle</h2>
              <p className="my-8 text-[16px]">
                Nous proposons des options allant de la première à la troisième
                maternelle.
              </p>
              <button
                className="font-sembibold h-[40px] w-[60%] rounded-lg border border-blue font-semibold text-blue"
                onClick={() => {
                  setShowSubscribeForm(true);
                }}
              >
                S&apos;inscrire
              </button>
            </div>
          </AnimatedEnter>
          <AnimatedEnter>
            <div className="flex h-full flex-col items-center justify-center rounded-md border border-border bg-white p-8 text-center text-blue shadow-md shadow-blue/20">
              <h2 className="text-[20px] font-semibold">Ecole Primaire</h2>
              <p className="my-8 text-[16px]">
                Nous offrons des options allant de la première à la sixième
                année primaire.
              </p>
              <button
                className="font-sembibold h-[40px] w-[60%] rounded-lg border border-blue font-semibold text-blue"
                onClick={() => {
                  setShowSubscribeForm(true);
                }}
              >
                S&apos;inscrire
              </button>
            </div>
          </AnimatedEnter>
          <AnimatedEnter>
            <div className="mt-0 flex h-full flex-col items-center justify-center rounded-md border border-blue/20 bg-blue p-8 text-center text-white shadow-md">
              <h2 className="text-[20px] font-semibold">Ecole Secondaire</h2>
              <p className="my-8 text-[16px]">
                Nous offrons les options de CTB, aux humanites nous avons
                <span className="ml-1 font-semibold underline">
                  la Coupe et couture,
                </span>{' '}
                <span className="font-semibold underline">
                  l&apos;Agronomie
                </span>{' '}
                et{' '}
                <span className="font-semibold underline">
                  la techinique sociale
                </span>
              </p>
              <button
                className="font-sembibold h-[40px] w-[60%] rounded-lg border border-white font-semibold text-white"
                onClick={() => {
                  setShowSubscribeForm(true);
                }}
              >
                S&apos;inscrire
              </button>
            </div>
          </AnimatedEnter>
        </div>
      </div>
      <div className=" my-10 rounded-[10px] px-8 md:my-20  lg:px-16">
        <AnimatedEnter>
          <h1 className="text-[25px] font-bold text-blue">A Propos de nous</h1>
          <div className="flex flex-col-reverse gap-2 pt-10 md:grid md:grid-cols-2 md:gap-10 md:pt-0">
            <p className=" font-regular mt-8 text-[14px] leading-8">
              Notre école s&apos;engage à créer un environnement où le bonheur
              de chaque enfant est primordial. En repensant l&apos;éducation,
              nous offrons bien plus qu&apos;une excellence académique. Nous
              nous soucions profondément du bien-être émotionnel, social et
              physique de chaque élève. Avec dévouement, notre équipe travaille
              pour guider chaque enfant vers son plein potentiel, en les
              inspirant à explorer leur créativité et à devenir des citoyens
              responsables et empathiques. Nous croyons en une approche
              holistique de l&apos;éducation, où chaque aspect de l&apos;être
              humain est pris en compte. Rejoignez-nous pour une expérience
              éducative de qualité, où chaque enfant est valorisé et soutenu
              dans son parcours d&apos;apprentissage. Ensemble, nous pouvons
              façonner un avenir où le bonheur et le succès vont de pair.
            </p>
            <div className="grid w-full grid-cols-4  gap-2">
              <img
                src="/assets/images/home/pupil3.jpg"
                alt="Student Writing"
                className="col-span-2 row-span-4 h-full object-cover"
              />

              <img
                src="/assets/images/home/maternel.jpg"
                alt="Students Collaborating"
                className=" col-span-2 row-span-2 h-[250px] w-full object-cover"
              />
              <img
                src="/assets/images/home/bus.jpg"
                alt="Teacher in Class"
                className=" col-span-2 row-span-2 object-cover"
              />
            </div>
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
              Notre devise <br />{' '}
              <span className="mt-4 font-bold">EDUCATION-PAIX-PROGRES</span>
            </span>
          </motion.h1>
        </LampContainer>
      </div>
    </div>
  );
};

export { About };
