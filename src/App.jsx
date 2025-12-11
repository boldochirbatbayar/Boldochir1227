import React, { useState } from 'react';
import Dad from './assets/Dad.jpg';
import Mom from './assets/Mom.jpg';
import Tsogto from './assets/Tsogto.jpg';
import Young from './assets/Young.jpg';
import Oyu from './assets/Oyu.jpg';
import Minecraft from './assets/Minecraft.jpg';
import Tennis from './assets/Tennis.jpg';
import flower from './assets/Flower.jpg';
import Khana from './assets/Khana.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('Нүүр');
  const navItems = ['Нүүр', 'Миний тухай', 'Гэр бүл', 'Хобби', 'Холбоо барих'];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">Б</span>
            </div>
            <h1 className="text-2xl font-bold">Болд-Очир</h1>
          </div>
          <div className="flex space-x-6">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${activeSection === item ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-20 container mx-auto px-6">

        {activeSection === 'Нүүр' && (
          <section className="min-h-screen flex items-center justify-center text-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Сайн байна уу!<br />Намайг <span className="text-blue-500">Болд-Очир гэдэг</span>
              </h1>
              <button onClick={() => setActiveSection('Холбоо барих')} className="px-10 py-5 bg-blue-500 text-white text-xl font-bold rounded-xl hover:bg-blue-600 transition">
                Холбоо барих
              </button>
            </div>
          </section>
        )}

        {activeSection === 'Миний тухай' && (
          <section className="py-16">
            <h2 className="text-5xl font-bold text-center mb-12">Миний тухай</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Хувийн мэдээлэл</h3>
                <ul className="space-y-4 text-lg">
                  <li>Нэр: Болд-Очир</li>
                  <li>Төрсөн: 2008.12.27</li>
                  <li>Өндөр: 165 см</li>
                  <li>Жин: 52 кг</li>
                  <li>Гэр: Улаанбаатар хот сүхбаатар дүүрэг Бэлх</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Танилцуулга</h3>
                <p className="text-lg leading-relaxed">
                  Монгол Коосэн сургуулийн 4-5 ангийн сурагч. Minecraft, теннис тоглох, код бичих, зураг зурах.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'Гэр бүл' && (
          <section className="py-16">
            <h2 className="text-5xl font-bold text-center mb-12">Миний гэр бүл</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {name:'Батбаяр',relation:'Аав',img:Dad},
                {name:'Алтай',relation:'Ээж',img:Mom},
                {name:'Цогтбаяр',relation:'Ах',img:Tsogto},
                {name:'Хантулга',relation:'Дүү',img:Khana},
                {name:'Оюусэцэн',relation:'Дүү',img:Oyu},
              ].map(m => (
                <div key={m.name} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <img src={m.img} alt={m.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                  <h3 className="text-2xl font-bold">{m.name}</h3>
                  <p className="text-blue-600 text-lg">{m.relation}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'Хобби' && (
          <section className="py-20">
            <h2 className="text-5xl font-bold text-center mb-16">Миний хобби</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-green-500 to-emerald-700 text-white rounded-2xl shadow-2xl overflow-hidden">
                <img src={Minecraft} alt="Minecraft" className="w-full h-96 object-cover" />
                <div className="p-8 text-center">
                  <h3 className="text-4xl font-bold mb-3">Minecraft</h3>
                  <p className="text-xl">Том байшин, Redstone машин хийнэ</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl shadow-2xl overflow-hidden">
                <img src={Tennis} alt="Теннис" className="w-full h-96 object-cover" />
                <div className="p-8 text-center">
                  <h3 className="text-4xl font-bold mb-3">Ширээний теннис</h3>
                  <p className="text-xl">Найзуудтайгаа тоглоно</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl shadow-2xl overflow-hidden">
                <img src={flower} alt="Зураг" className="w-full h-96 object-cover" />
                <div className="p-8 text-center">
                  <h3 className="text-4xl font-bold mb-3">Зураг зурах</h3>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'Холбоо барих' && (
          <section className="py-16">
            <h2 className="text-5xl font-bold text-center mb-12">Холбоо барих</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-10 rounded-xl shadow-lg">
                <form className="space-y-6">
                  <input type="text" placeholder="Нэр" className="w-full px-6 py-4 border-2 rounded-lg text-lg" />
                  <input type="email" placeholder="И-мэйл" className="w-full px-6 py-4 border-2 rounded-lg text-lg" />
                  <textarea rows={6} placeholder="Мессеж..." className="w-full px-6 py-4 border-2 rounded-lg text-lg"></textarea>
                  <button className="w-full py-5 bg-blue-500 text-white text-xl font-bold rounded-lg hover:bg-blue-600 transition">
                    Илгээх
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="py-10 text-center text-gray-600 border-t mt-20">
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Portfolio;