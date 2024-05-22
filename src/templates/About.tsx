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
              <h2 className="mb-4 text-[20px] font-semibold">
                Ecole Maternelle
              </h2>
              <img
                src="/assets/images/home/maternel.jpg"
                className="mb-4 h-[150px] w-full rounded-md object-cover"
                alt="pupils"
              />
              <p className="mb-8 text-[16px]">
                Nous proposons des options allant de la première à la troisième
                maternelle.
              </p>
            </div>
          </AnimatedEnter>
          <AnimatedEnter>
            <div className="flex max-h-[300px] flex-col items-center justify-center rounded-md border border-border bg-white p-4 text-center text-blue shadow-md shadow-blue/20">
              <h2 className="mb-4 text-[20px] font-semibold">Ecole Primaire</h2>
              <img
                src="/assets/images/home/primary.jpg"
                className="mb-4 h-[150px] w-full rounded-md object-cover"
                alt="pupils"
              />
              <p className="mb-8 text-[16px]">
                Nous offrons des options allant de la première à la sixième
                année primaire.
              </p>
            </div>
          </AnimatedEnter>
          <AnimatedEnter>
            <div className="mt-0 flex flex-col items-center justify-center gap-4 rounded-md border border-blue/20 bg-blue p-2 text-center text-white shadow-md md:mt-[-60px] ">
              <div className="p-2">
                <h2 className="my-8 text-[20px] font-semibold">
                  Ecole Secondaire
                </h2>
                <p className="mb-8 text-[16px]">
                  Nous proposons également la septième et la huitième année. Et
                  voici les différentes sections que nous organisons:
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
            <img
              src="/assets/images/home/bus.jpg"
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
