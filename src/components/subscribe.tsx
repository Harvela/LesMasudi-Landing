/* eslint-disable no-plusplus */
/* eslint-disable radix */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createSubscription } from './hooks/subscribe';
import Input from './input';
import Select from './select';

const Subscribe: React.FC<{ onClose: any }> = ({ onClose }) => {
  const [data, setData] = useState({} as any);
  const { register, handleSubmit, reset } = useForm<any>();
  // const [errors, setErrors] = useState<any>({});

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
    if (data.level === 'primaire') {
      level = ['1', '2', '3', '4', '5', '6'];
    } else if (data.level === 'ctb') {
      level = ['7', '8'];
    } else if (data.level === 'maternelle') {
      level = ['1', '2', '3'];
      adding = true;
    } else {
      level = ['1', '2', '3', '4'];
      adding = true;
    }
    for (let i = 0; i < level.length; i++) {
      classes.push({
        label: `${level[i]} ${data.level}`,
        value: `${
          adding
          // ? Number.parseInt(level[i]) + 9 : Number.parseInt(level[i])
        }`,
      });
    }
    return classes;
  };

  const onSubmit = async (formData: any, event: any) => {
    console.log('Form Data:', formData);

    try {
      await createSubscription(formData);

      if (event.nativeEvent.submitter.name === 'close') {
        onClose();
      } else if (event.nativeEvent.submitter.name === 'saveAndReset') {
        reset();
      }
    } catch (error) {
      // console.log()
    }
  };

  return (
    <div className="flex flex-col justify-center px-2 py-6 md:min-h-full lg:px-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inscription
        </h2>
      </div>

      <div className="mt-10 px-4 sm:mx-auto sm:w-full md:px-8">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Input
              placeholder={''}
              name={'Nom'}
              label="Nom"
              register={register}
            />
            <Input
              placeholder={''}
              name={'PostNom'}
              label="Post-nom"
              register={register}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Input
              placeholder={''}
              name={'Prenom'}
              label="Prenom"
              register={register}
            />
            <Select
              placeholder={'Selectionner'}
              name={'sex'}
              label="Sexe"
              options={[
                { label: 'Feminin', value: 'feminin' },
                { label: 'Masculin', value: 'masculin' },
              ]}
              register={register}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Select
              placeholder={'Selectionner'}
              name={'level'}
              label="Niveau"
              options={options}
              onChange={(value: any) => setData({ ...data, level: value })}
              register={register}
            />
            <Select
              placeholder={'Selectionner'}
              name={'class'}
              label="Classe"
              options={getClasses()}
              register={register}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Input
              placeholder={''}
              name={'birthplace'}
              label="Lieu de naissance"
              register={register}
            />
            <Input
              type="date"
              placeholder={''}
              name={'birthdate'}
              label="Date de naissance"
              register={register}
            />
          </div>
          <div className="">
            <Input
              placeholder={''}
              name={'school'}
              label="Ecole de provenance"
              register={register}
            />
          </div>
          <div className="">
            <Input
              placeholder={''}
              label="Autres precisions"
              name={'message'}
              register={register}
            />
          </div>

          <div className="flex flex-col-reverse justify-between gap-4 md:flex-row md:gap-8">
            <button
              type="submit"
              name="close"
              className="mb-4 w-full rounded-md bg-[#c61a09] px-2 py-1 text-[#fff] md:mb-0 md:w-[50%]"
            >
              Fermer la fenetre
            </button>
            <button
              type="submit"
              name="saveAndReset"
              className="flex w-full justify-center rounded-md bg-blue px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:w-[50%]"
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
