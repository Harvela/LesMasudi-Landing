/* eslint-disable no-plusplus */
/* eslint-disable radix */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createSubscription } from './hooks/subscribe';
import Input from './input';
import Select from './select';

const Subscribe: React.FC<{ onClose: any }> = ({ onClose }) => {
  const [data, setData] = useState({} as any);
  const [saving, setSaving] = useState(false);
  const { register, handleSubmit, setValue } = useForm<any>();
  // const [errors, setErrors] = useState<any>({});

  const options = [
    { label: 'Maternelle', value: 'Maternelle' },
    { label: 'Primaire', value: 'Primaire' },
    { label: 'CTB', value: 'CTB' },
    { label: 'Secondaire', value: 'Secondaire' },
  ];

  const getClasses = () => {
    const classes = [];
    let level = [];
    if (data.level === 'primaire') {
      level = ['1', '2', '3', '4', '5', '6'];
    } else if (data.level === 'ctb') {
      level = ['7', '8'];
    } else if (data.level === 'maternelle') {
      level = ['1', '2', '3'];
    } else {
      level = ['1', '2', '3', '4'];
    }
    for (let i = 0; i < level.length; i++) {
      classes.push({
        label: `${level[i]} ${data.level}`,
        value: level[i] || '0',
      });
    }
    return classes;
  };

  const onSubmit = async (formData: any, event: any) => {
    console.log('Form Data:', formData);

    try {
      if (saving) return;
      setSaving(true);
      await createSubscription({
        ...formData,
        Classe: Number.parseInt(formData.Classe || '0'),
      });
      if (event.nativeEvent.submitter.name === 'close') {
        onClose();
      } else if (event.nativeEvent.submitter.name === 'saveAndReset') {
        // reset();
      }
      onClose();
    } catch (error) {
      // console.log()
    }

    setSaving(false);
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
              name={'Sexe'}
              label="Sexe"
              options={[
                { label: 'Feminin', value: 'Feminin' },
                { label: 'Masculin', value: 'Masculin' },
              ]}
              register={register}
              onChange={(e: string) => {
                console.log(e);
                setValue('Sexe', e);
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Select
              placeholder={'Selectionner'}
              name={'Niveau'}
              label="Niveau"
              options={options}
              onChange={(e: string) => {
                console.log(e);
                setValue('Niveau', e);
                setData({ ...data, level: e });
              }}
              register={register}
            />
            <Select
              placeholder={'Selectionner'}
              name={'Classe'}
              label="Classe"
              options={getClasses()}
              register={register}
              onChange={(e: string) => {
                console.log(e);
                setValue('Classe', Number.parseInt(e));
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Input
              placeholder={''}
              name={'Place_of_Birth'}
              label="Lieu de naissance"
              register={register}
            />
            <Input
              type="date"
              placeholder={''}
              name={'Date_of_Birth'}
              label="Date de naissance"
              register={register}
            />
          </div>
          <div className="">
            <Input
              placeholder={''}
              name={'School_origin'}
              label="Ecole de provenance"
              register={register}
            />
          </div>
          <div className="">
            <Input
              placeholder={''}
              label="Autres precisions"
              name={'comment'}
              register={register}
            />
          </div>

          <div className="flex flex-col-reverse justify-between gap-4 md:flex-row md:gap-8">
            <button
              type="button"
              name="close"
              className="mb-4 w-full rounded-md bg-[#c61a09] px-2 py-1 text-[#fff] md:mb-0 md:w-[50%]"
              onClick={onClose}
            >
              Annuler
            </button>
            <button
              type="submit"
              name="saveAndReset"
              className="flex w-full justify-center rounded-md bg-blue px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:w-[50%]"
            >
              {!saving ? 'Enregistrer' : 'Enregistrement...'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Subscribe };
