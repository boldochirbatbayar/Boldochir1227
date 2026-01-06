import React, { useState } from 'react';

import Dad from './assets/Dad.jpg';
import Mom from './assets/Mom.jpg';
import Tsogto from './assets/Tsogto.jpg';
import Oyu from './assets/Oyu.jpg';
import Khana from './assets/Khana.jpg';
import Minecraft from './assets/Minecraft.jpg';
import Tennis from './assets/Tennis.jpg';
import flower from './assets/Flower.jpg';

import ShagaiGame from './ShagaiGame.jsx';
import NikeSite from './NikeSite.jsx';
import NumberGuessingGame from './NumberGuessingGame.jsx';
import TodoList from './TodoList.jsx';
import TicTacToe from './TicTacToe.jsx';
import MovieSite from './MovieSite.jsx';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('Нүүр');
  const [openProject, setOpenProject] = useState(null);

  const navItems = [
    'Нүүр',
    'Миний тухай',
    'Гэр бүл',
    'Хобби',
    'Миний төслүүд',
    'Холбоо барих',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Болд-Очир</h1>
          <div className="flex space-x-4">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === item
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6 container mx-auto">

        {activeSection === 'Нүүр' && (
          <section className="min-h-screen flex items-center justify-center text-center">
            <h1 className="text-6xl font-bold">
              Сайн байна уу!<br />
              Намайг <span className="text-blue-500">Болд-Очир</span> гэдэг
            </h1>
          </section>
        )}

        {activeSection === 'Миний тухай' && (
          <section className="py-20 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Миний тухай</h2>
            <p className="text-lg">
              Монгол Коосэн сургуулийн сурагч. Код бичих, тоглоом хийх,
              Minecraft, теннис тоглох дуртай.
            </p>
          </section>
        )}

        {activeSection === 'Гэр бүл' && (
          <section className="py-20">
            <h2 className="text-4xl font-bold text-center mb-10">Гэр бүл</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Батбаяр', role: 'Аав', img: Dad },
                { name: 'Алтай', role: 'Ээж', img: Mom },
                { name: 'Цогтбаяр', role: 'Ах', img: Tsogto },
                { name: 'Хантулга', role: 'Дүү', img: Khana },
                { name: 'Оюусэцэн', role: 'Дүү', img: Oyu },
              ].map(m => (
                <div key={m.name} className="bg-white p-6 rounded-xl shadow text-center">
                  <img src={m.img} className="h-56 w-full object-cover rounded mb-4" />
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'Хобби' && (
          <section className="py-20">
            <h2 className="text-4xl font-bold text-center mb-10">Хобби</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <img src={Minecraft} />
              <img src={Tennis} />
              <img src={flower} />
            </div>
          </section>
        )}

        {activeSection === 'Миний төслүүд' && (
          <section className="py-20">
            <h2 className="text-4xl font-bold text-center mb-10">Миний төслүүд</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                ['Шаагай тоглоом', 'shagai'],
                ['Nike сайт', 'nike'],
                ['Тоо таах', 'number'],
                ['Todo List', 'todo'],
                ['Tic Tac Toe', 'tic'],
                ['Movie сайт', 'movie'],
              ].map(([title, key]) => (
                <button
                  key={key}
                  onClick={() => setOpenProject(key)}
                  className="bg-white p-8 rounded-xl shadow-lg text-xl font-bold hover:scale-105 transition"
                >
                  {title}
                </button>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'Холбоо барих' && (
          <section className="py-20 max-w-xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Холбоо барих</h2>
            <input className="w-full border p-3 mb-4" placeholder="Нэр" />
            <input className="w-full border p-3 mb-4" placeholder="Имэйл" />
            <textarea className="w-full border p-3 mb-4" rows="5" />
            <button className="w-full bg-blue-500 text-white p-3 rounded">
              Илгээх
            </button>
          </section>
        )}
      </main>

      {openProject === 'shagai' && <ShagaiGame close={() => setOpenProject(null)} />}
      {openProject === 'nike' && <NikeSite close={() => setOpenProject(null)} />}
      {openProject === 'number' && <NumberGuessingGame close={() => setOpenProject(null)} />}
      {openProject === 'todo' && <TodoList close={() => setOpenProject(null)} />}
      {openProject === 'tic' && <TicTacToe close={() => setOpenProject(null)} />}
      {openProject === 'movie' && <MovieSite close={() => setOpenProject(null)} />}

    </div>
  );
};

export default Portfolio;
