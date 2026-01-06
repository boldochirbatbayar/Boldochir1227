import React, { useState, useEffect } from 'react';
import nike1 from './assets/nike1.jpg';
import nike2 from './assets/nike2.jpg';
import nike3 from './assets/nike3.jpg';

const NikeSite = ({ close }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('nikeCart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('nikeCart', JSON.stringify(cart));
  }, [cart]);

  const shoes = [
    { id: 1, name: 'Air Jordan 1 Chicago', price: 180, img: nike1 },
    { id: 2, name: 'Nike Dunk Low', price: 120, img: nike2 },
    { id: 3, name: 'Air Force 1', price: 110, img: nike3 },
  ];

  const addToCart = (shoe) => setCart([...cart, shoe]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <button onClick={close} className="fixed top-4 right-4 md:top-6 md:right-6 z-50 bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-2xl md:text-3xl shadow-lg hover:bg-gray-800">×</button>
      <header className="bg-black text-white py-8 md:py-12 lg:py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter">NIKE</h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-2 md:mt-4 opacity-80">Just Do It</p>
      </header>
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16">ШИНЭ ЗАГВАРУУД</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                <img src={shoe.img} alt={shoe.name} className="w-full h-48 md:h-64 lg:h-80 object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="text-center mt-4 md:mt-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">{shoe.name}</h3>
                <p className="text-2xl md:text-3xl lg:text-4xl font-black text-red-600 mb-4 md:mb-6">${shoe.price}</p>
                <button onClick={() => addToCart(shoe)} className="px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 bg-black text-white text-base md:text-lg lg:text-xl font-bold rounded-full hover:bg-gray-900 transition shadow-lg">
                  САГСАНД НЭМЭХ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-black text-white py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-12">ТАНЫ САГС</h3>
          {cart.length === 0 ? (
            <p className="text-base md:text-lg text-center text-gray-400">Хоосон байна</p>
          ) : (
            <>
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 md:py-4 border-b border-gray-600 text-base md:text-lg">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-right mt-8 md:mt-12">НИЙТ: <span className="text-red-500">${total}</span></p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default NikeSite;