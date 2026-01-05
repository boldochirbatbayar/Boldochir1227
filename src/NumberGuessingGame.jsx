import React, { useState } from 'react';

const NumberGuessingGame = ({ close }) => {
  const [target] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('1-100 хооронд тоо оруулна уу!');
      return;
    }
    setAttempts(attempts + 1);
    if (num === target) {
      setMessage(`🎉 АМЖИЛТ! ${attempts + 1} удаагийн оролдлогоор таалаа!`);
      setGameOver(true);
    } else if (num < target) {
      setMessage('🔥 ИЛҮҮ ӨНДӨР!');
    } else {
      setMessage('❄️ ИЛҮҮ БАГА!');
    }
    if (attempts + 1 >= 10 && num !== target) {
      setMessage(`😭 Дууслаа! Зөв тоо байсан: ${target}`);
      setGameOver(true);
    }
    setGuess('');
  };

  const reset = () => window.location.reload();

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center text-white z-50 p-4">
      <button onClick={close} className="absolute top-4 right-4 md:top-6 md:right-6 text-3xl md:text-4xl hover:text-gray-300">&times;</button>
      <div className="text-center px-4 md:px-6 max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 lg:mb-12">ТОО ТААХ</h1>
        <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 opacity-90">1-100 хооронд бодлоо</p>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-12">Оролдлого: <span className="text-yellow-400 font-bold">{attempts}/10</span></p>
        {!gameOver ? (
          <>
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
              className="px-4 py-3 md:px-6 md:py-4 text-2xl md:text-3xl text-center rounded-xl md:rounded-2xl w-48 md:w-64 lg:w-80 text-black font-bold mb-6 md:mb-8"
              placeholder="?"
              min="1"
              max="100"
            />
            <br />
            <button onClick={handleGuess} className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-black text-base md:text-lg lg:text-xl font-bold rounded-full hover:scale-105 transition shadow-lg">
              ТААХ
            </button>
          </>
        ) : (
          <button onClick={reset} className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-yellow-500 text-black text-base md:text-lg lg:text-xl font-bold rounded-full hover:scale-105 transition shadow-lg">
            ДАХИН ТОГЛОХ
          </button>
        )}
        <p className="text-lg md:text-xl lg:text-2xl font-bold mt-6 md:mt-8 lg:mt-12 min-h-12 md:min-h-16 lg:min-h-20">{message}</p>
      </div>
    </div>
  );
};

export default NumberGuessingGame;