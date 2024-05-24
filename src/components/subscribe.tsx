/* eslint-disable no-plusplus */
/* eslint-disable radix */
import React, { useState } from 'react';

import Input from './input';
import Select from './select';

const Subscribe: React.FC<{ message?: string; onClose: any }> = ({
  message,
  onClose,
}) => {
  const [data, setData] = useState({} as any);

  const options = [
    { label: 'Maternelle', value: 'maternelle' },
    { label: 'Primaire', value: 'primaire' },
    { label: 'CTB', value: 'ctb' },
    { label: 'Secondaire', value: 'secondaire' },
  ];

  const getClasses = () => {
    const classes = [];
    let level = [];
    let adding = false;
    // let suffix = 0;

    if (data.level === 'primaire') {
      level = ['1', '2', '3', '4', '5', '6'];
    } else if (data.level === 'ctb') {
      level = ['7', '8'];
    } else if (data.level === 'maternelle') {
      level = ['1', '2', '3'];
      adding = true;
      // suffix = 4;
    } else {
      level = ['1', '2', '3', '4'];
      adding = true;
    }
    for (let i = 0; i < level.length; i++) {
      classes.push({
        label: `${level[i]} ${data.level}`,
        value: `${
          adding
          // ? Number.parseInt(level[i]) + 9 + suffix
          // : Number.parseInt(level[i])
        }`,
      });
    }
    return classes;
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-2 py-6 lg:px-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inscription
        </h2>
      </div>

      <div className="mt-10 px-8 sm:mx-auto sm:w-full">
        <form className="space-y-6" action="#" method="POST">
          <div className="grid grid-cols-2 gap-8">
            <Input placeholder={''} name={'name'} label="Nom" />
            <Input placeholder={''} name={'postnom'} label="Post-nom" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Input placeholder={''} name={'prenom'} label="Prenom" />
            <Select
              placeholder={'Selectionner'}
              name={''}
              label="Sexe"
              options={[
                { label: 'Feminin', value: 'feminin' },
                { label: 'Masculin', value: 'masculin' },
              ]}
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Select
              placeholder={'Selectionner'}
              name={'niveau'}
              label="Niveau"
              options={options}
              onChange={(value: any) => setData({ ...data, level: value })}
            />
            <Select
              placeholder={'Selectionner'}
              name={'classe'}
              label="Classe"
              options={getClasses()}
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Input placeholder={''} name={''} label="Lieu de naissance" />
            <Input
              type="date"
              placeholder={''}
              name={'date'}
              label="Date de naissance"
            />
          </div>
          <div className="">
            <Input
              placeholder={''}
              name={'school'}
              label="Ecole de provenance"
            />
          </div>
          <div className="">
            <Input
              placeholder={''}
              label="Autres precisions"
              name={'message'}
              defaultValue={message}
            />
          </div>

          <div className="flex flex-row justify-between gap-8">
            <button
              onClick={() => onClose?.()}
              type="button"
              className="w-[50%] rounded-md bg-[#c61a09] px-2 py-1 text-[#fff]"
            >
              Fermer la fenetre
            </button>
            <button
              type="submit"
              className="flex w-[50%] justify-center rounded-md bg-blue px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enregistrer un autre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Subscribe };
