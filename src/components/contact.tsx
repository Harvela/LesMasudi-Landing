import React from 'react';
import { MdClose } from 'react-icons/md';

const Contact: React.FC<{ message?: string; onClose: any }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="flex min-h-full flex-col justify-center px-2 py-6 lg:px-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Nous contacter
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Votre addresse email ou Telephone
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Votre Nom complet
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="msg"
                name="msg"
                defaultValue={message}
                required
                className="block h-[150px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between gap-4">
            <button
              onClick={() => onClose?.()}
              className="rounded-md bg-[#c61a09] p-2 text-[#fff]"
            >
              <MdClose className="cursor-pointer" />
            </button>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Contact };
