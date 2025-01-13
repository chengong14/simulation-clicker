import React from 'react';

const GameSection = () => {
  return (
    <section id="game" className="py-8">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://html-classic.itch.zone/html/12491167/index.html"
            className="w-full h-[600px] border-0 rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Click to play! The game will open in fullscreen for the best experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameSection; 