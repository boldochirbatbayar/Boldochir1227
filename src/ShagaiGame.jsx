import React, { useState } from 'react';
import shagai_horse from './assets/shagai_horse.png';
import shagai_camel from './assets/shagai_camel.png';
import shagai_sheep from './assets/shagai_sheep.png';
import shagai_goat from './assets/shagai_goat.png';

const ShagaiGame = ({ close }) => {
  const [rolls, setRolls] = useState([]);
  const sides = [shagai_horse, shagai_camel, shagai_sheep, shagai_goat];

  const roll = () => {
    const newRolls = Array(4).fill().map(() => sides[Math.floor(Math.random() * 4)]);
    setRolls(newRolls);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-amber-900 to-black flex flex-col items-center justify-center text-white z-50 p-4 md:p-8 overflow-y-auto">
      <button onClick={close} className="absolute top-4 md:top-6 right-4 md:right-6 text-4xl md:text-5xl hover:text-gray-300 transition">&times;</button>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 md:mb-12 lg:mb-16 tracking-wider text-center">МОНГОЛ ШААГАЙ</h1>
      <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 opacity-90 text-center">Уламжлалт тоглоом</p>
      <button onClick={roll} className="px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 bg-gradient-to-r from-yellow-600 to-amber-500 text-black text-xl md:text-2xl lg:text-3xl font-bold rounded-full hover:scale-105 transition shadow-lg md:shadow-xl">
        ШИДЭХ
      </button>
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 lg:mt-16 justify-center">
        {rolls.length === 0 ? (
          <p className="text-lg md:text-xl lg:text-2xl opacity-70 text-center w-full">Товч дарж шаагай хая...</p>
        ) : (
          rolls.map((img, i) => (
            <div key={i} className="animate-bounce">
              <img src={img} alt="Шаагай" className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 object-contain rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg border-4 border-amber-600" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShagaiGame;