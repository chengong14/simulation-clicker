import React from 'react';

const GameSection = () => {
  return (
    <section id="game" className="py-12">
      <div className="glass-effect rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative">
            <iframe
              src="https://html-classic.itch.zone/html/12491167/index.html"
              className="w-full h-[600px] border-0 rounded-xl shadow-2xl glow-effect"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-medium">
            Click to play! The game will open in fullscreen for the best experience.
          </p>
          <div className="mt-4 inline-block">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 hover-float">
              Start Playing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection; 