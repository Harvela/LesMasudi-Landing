import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { IoRestaurantOutline } from 'react-icons/io5';

import { Contact } from '@/components/contact';
import Dialog from '@/components/dialog';

const Options = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [message, setMessage] = React.useState('');
  return (
    <div id="service" className="relative h-auto md:h-[80vh]">
      {showForm && (
        <Dialog
          onClose={() => {
            setShowForm(false);
          }}
          isForm
          width="md:w-[50%] sm:w-[95%] overflow-y-scroll max-h-[80%]"
        >
          <Contact message={message} onClose={() => setShowForm(false)} />
        </Dialog>
      )}
      <img
        src="/assets/images/home/pupil2.jpg"
        alt="Hero"
        className="hidden size-full object-cover md:block"
      />
      <div className="relative left-0 top-0 flex size-full flex-row gap-16 p-8 md:absolute md:bg-blue/60 md:p-16">
        <div>
          <h1 className="z-40 mb-2 mt-5 text-xl font-semibold text-blue md:text-white lg:text-xl">
            AUTRES SERVICES
          </h1>
          <div className="h-[4px] w-[4%] bg-blue md:bg-white" />
          <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-6 rounded-md  border-[1px] border-white/60 bg-blue p-8 text-center text-white">
              <IoRestaurantOutline className="h-10 w-10" />
              <h2 className="text-[20px] font-semibold">CANTINE SCOLAIRE</h2>

              <p className="text-[14px]">
                Notre cantine scolaire se distingue par ses repas préparés avec
                soin, offrant le goût réconfortant et l&apos;authenticité des
                plats faits maison.
              </p>

              <button
                className="mt-2 rounded-md border border-white px-8 py-2"
                onClick={() => {
                  setShowForm(true);
                  setMessage(
                    `Bonjour, je voudrais avoir plus d'informations sur la cantine scolaire`,
                  );
                }}
              >
                En savoir plus
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 rounded-md  border-[1px] border-white/60 bg-red-800 p-8 text-center text-white">
              <FiTruck className="h-10 w-10" />
              <h2 className="text-[20px] font-semibold">TRANSPORT SCOLAIRE</h2>

              <p className="text-[14px]">
                Notre service de transport scolaire dispose d&apos;une flotte de
                bus suffisante pour assurer aux élèves des déplacements
                confortables et sécurisés, facilitant ainsi leur mobilité
                quotidienne.
              </p>
              <button
                className="mt-2 rounded-md border border-white px-8 py-2"
                onClick={() => {
                  setShowForm(true);
                  setMessage(
                    `Bonjour, je voudrais avoir plus d'informations sur le transport scolaire`,
                  );
                }}
              >
                En savoir plus
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 rounded-md  border-[1px] border-white/60 bg-blue p-8 text-center text-white">
              <FaRegEdit className="h-10 w-10" />
              <h2 className="text-[20px] font-semibold">
                FORMATIONS EXTRASCOLAIRE
              </h2>

              <p className="text-[14px]">
                Nous proposons des formations extrascolaires pour doter nos
                élèves des compétences essentielles à la vie quotidienne,
                enrichissant ainsi leur parcours éducatif avec des savoir-faire
                pratiques et pertinents.
              </p>
              <button
                className="mt-2 rounded-md border border-white px-8 py-2"
                onClick={() => {
                  setShowForm(true);
                  setMessage(
                    `Bonjour, je voudrais avoir plus d'informations sur les formations extrascolaires`,
                  );
                }}
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Options };
