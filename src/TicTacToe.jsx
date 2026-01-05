import React, { useState } from 'react';

const TicTacToe = ({ close }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = (() => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let [a,b,c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return null;
  })();

  const click = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = isX ? 'X' : 'O';
    setBoard(newBoard);
    setIsX(!isX);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 flex items-center justify-center text-white z-50 p-4">
      <button onClick={close} className="absolute top-4 right-4 md:top-6 md:right-6 text-3xl md:text-4xl hover:text-gray-300">&times;</button>
      <div className="text-center w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 lg:mb-12">TIC TAC TOE</h1>
        <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto mb-6 md:mb-8 lg:mb-12">
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => click(i)}
              className="aspect-square text-4xl md:text-5xl lg:text-6xl font-bold bg-white/20 backdrop-blur rounded-lg md:rounded-xl hover:bg-white/40 transition shadow-lg"
            >
              {cell}
            </button>
          ))}
        </div>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
          {winner ? `🎉 ЯЛАГЧ: ${winner}!` : board.every(Boolean) ? '🤝 ТЭНЦЛЭЭ!' : `Дараагийн: ${isX ? 'X' : 'O'}`}
        </p>
        <button onClick={reset} className="px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-yellow-500 text-black text-base md:text-lg font-bold rounded-full hover:scale-105 transition shadow-lg">
          ДАХИН ЭХЛЭХ
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;