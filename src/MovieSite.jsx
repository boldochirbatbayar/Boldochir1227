import React, { useState } from 'react';
import inception from './assets/inception.jpg';
import matrix from './assets/matrix.jpg';
import interstellar from './assets/interstellar.jpg';

const MovieSite = ({ close }) => {
  const [playingTrailer, setPlayingTrailer] = useState(null);

  const movies = [
    { 
      title: 'INCEPTION', 
      year: '2010', 
      desc: 'Мөрөөдөл доторх гэмт хэрэг', 
      img: inception,
      trailerId: 'YoHD9XEInc0'
    },
    { 
      title: 'THE MATRIX', 
      year: '1999', 
      desc: 'Бодит байдал гэж юу вэ?', 
      img: matrix,
      trailerId: 'vKQi3bBA1y8'
    },
    { 
      title: 'INTERSTELLAR', 
      year: '2014', 
      desc: 'Сансрын аялал', 
      img: interstellar,
      trailerId: 'zSWdZVtXT7E'
    },
  ];

  const playTrailer = (movieId) => {
    setPlayingTrailer(movieId);
  };

  const closeTrailer = () => {
    setPlayingTrailer(null);
  };

  return (
    <div className="fixed inset-0 bg-black text-white z-50 overflow-y-auto">
      <button 
        onClick={close} 
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 bg-red-600 px-4 py-2 md:px-6 md:py-3 rounded-full text-2xl md:text-3xl shadow-lg hover:bg-red-700 transition-all"
      >
        ×
      </button>
      
      {playingTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-60 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">
            <button 
              onClick={closeTrailer}
              className="absolute -top-12 md:-top-16 right-0 bg-red-600 hover:bg-red-700 px-4 py-2 md:px-6 md:py-3 rounded-full text-2xl md:text-3xl z-70"
            >
              ✕
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${playingTrailer}?autoplay=1&rel=0&modestbranding=1`}
                className="absolute top-0 left-0 w-full h-full rounded-xl md:rounded-2xl shadow-lg"
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <header className="py-8 md:py-12 lg:py-16 text-center bg-gradient-to-b from-red-900 to-black">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wider">CINEMA X</h1>
        <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-6 opacity-80">Шилдэг кинонууд нэг дор</p>
      </header>
      
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {movies.map((movie) => (
            <div key={movie.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
                <img 
                  src={movie.img} 
                  alt={movie.title} 
                  className="w-full h-48 md:h-64 lg:h-80 object-cover group-hover:scale-110 transition duration-700" 
                />
              </div>
              <div className="text-center mt-4 md:mt-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-2 md:mb-4">{movie.title}</h3>
                <p className="text-base md:text-lg opacity-80 mb-2 md:mb-4">{movie.desc}</p>
                <p className="text-lg md:text-xl mb-4 md:mb-6">{movie.year}</p>
                <button 
                  onClick={() => playTrailer(movie.trailerId)}
                  className="px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 bg-red-600 text-base md:text-lg font-bold rounded-full hover:bg-red-700 transition-all shadow-lg hover:scale-105"
                >
                  ▶ ТРЕЙЛЕР ҮЗЭХ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="py-4 md:py-6 text-center text-sm md:text-base opacity-60">
        <p>Трейлер үзэхийн тулд дээрх товчлуур дээр дарна уу 🍿</p>
      </footer>
    </div>
  );
};

export default MovieSite;