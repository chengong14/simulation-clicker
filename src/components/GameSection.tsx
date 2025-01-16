import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GameSection = () => {
  const relatedGames = [
    {
      id: 1,
      title: "Planet Clicker",
      description: "Explore the cosmos in this space adventure",
      href: "/games/planet-clicker",
      image: "/img/PlanetClicker.jpg"
    },
    {
      id: 2,
      title: "Planet Clicker 2",
      description: "Continue your cosmic adventure in the sequel",
      href: "/games/planet-clicker-2",
      image: "/img/Planetclicker2.jpg"
    }
  ];

  return (
    <section id="game" className="py-12 space-y-16">
      {/* Main Game */}
      <div className="glass-effect rounded-2xl p-8 transform hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Stimulation Clicker
        </h2>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative">
            <iframe
              src="https://html-classic.itch.zone/html/12512364/index.html"
              className="w-full h-[600px] border-0 rounded-xl shadow-2xl glow-effect"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-medium">
            A dynamic and fast-paced clicker game that will keep you engaged for hours!
          </p>
        </div>
      </div>

      {/* Related Games */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">More Games You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedGames.map((game) => (
            <Link 
              key={game.id} 
              href={game.href}
              className="block group"
            >
              <div className="glass-effect rounded-2xl p-6 h-full transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                <div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative h-full rounded-xl overflow-hidden">
                    <Image
                      src={game.image}
                      alt={`${game.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold text-white text-center">
                        {game.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xl font-bold text-white px-6 py-2 rounded-full bg-purple-600/80 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        Play Now
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-white text-lg font-medium text-center">
                  {game.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection; 