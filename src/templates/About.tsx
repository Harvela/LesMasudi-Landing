import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: any) => {
    setActiveTab(tabNumber);
  };

  return (
    <div id="about" className="relative z-20 px-4 py-24 lg:px-16">
      <div>
        <div className="grid grid-cols-3 gap-16">
          <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-blue/20 bg-white py-16 font-semibold text-blue shadow-md">
            <h2>Turunga, Nyiragongo 4500</h2>
            <h2>Goma, DRC.</h2>
            <button className="mt-4 rounded-md border border-blue px-8 py-1 font-semibold text-blue">
              Directions
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-blue/20 bg-white py-16 font-semibold text-blue shadow-md">
            <h2>Turunga, Nyiragongo 4500</h2>
            <h2>Goma, DRC.</h2>
            <button className="mt-4 rounded-md border border-blue px-8 py-1 font-semibold text-blue">
              Directions
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-blue/20 bg-blue py-16 font-semibold text-white shadow-md">
            <h2>Turunga, Nyiragongo 4500</h2>
            <h2>Goma, DRC.</h2>
            <button className="mt-4 rounded-md border border-white px-8 py-1 font-semibold text-white">
              Directions
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col rounded-xl bg-[#E9EFFF] p-10 text-white">
        <div className="mb-8 flex flex-row items-center gap-8">
          <button
            className={`text-md font-semibold ${
              activeTab === 1
                ? 'rounded-md bg-blue/20 px-6 py-1 text-blue'
                : 'text-blue'
            }`}
            onClick={() => handleTabClick(1)}
          >
            A propos
          </button>
          <button
            className={`text-md font-semibold ${
              activeTab === 2
                ? 'rounded-md bg-blue/20 px-6 py-1 text-blue'
                : 'text-blue'
            }`}
            onClick={() => handleTabClick(2)}
          >
            Nos valeurs
          </button>
        </div>

        {activeTab === 1 && (
          <div className="flex w-full flex-row gap-8">
            <div className="h-[200px] w-full bg-blue"></div>
            <p className="text-md mb-8 text-black">
              Notre objectif est de rendre tout le monde heureux nous chaneons
              la maniere dont l educcation des enfants et nous travaillsons
              vaiment pour nous aider a etre wejkwjewke , parceque nous sommes
              touj ours wejnfwnfw lwewjenwe kwjewkejwne wkejwnewjen wjkenkwnf
              kwejfnwfj jwefnwkjfw kjwenfwf kjwnefwnf kwjefnw wkjenfw kwjefnwf
              wkejf wk fwfwf wkfjw fwkj fwkfjwkf wkjf wkf wf wfj w fwej ee wke
              fwkjfw kwjfwfnwkfnw kwjefnwfkwfjnw wkejfnwfw
            </p>
          </div>
        )}

        {activeTab === 2 && (
          <div className="flex w-full flex-row gap-8">
            <div className="h-[200px] w-full bg-blue"></div>
            <p className="text-md mb-8 text-black">
              Wkf wf wfj w fwej ee wke fwkjfw kwjfwfnwkfnw kwjefnwfkwfjnw
              wkejfnwfw Notre objectif est de rendre tout le monde heureux nous
              chaneons la maniere dont l educcation des enfants et nous
              travaillsons vaiment pour nous aider a etre wejkwjewke , parceque
              nous sommes touj ours wejnfwnfw lwewjenwe kwjewkejwne wkejwnewjen
              wjkenkwnf kwejfnwfj jwefnwkjfw kjwenfwf kjwnefwnf kwjefnw wkjenfw
              kwjefnwf wkejf wk fwfwf wkfjw fwkj fwkfjwkf wkjf
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { About };
