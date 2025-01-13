import React from 'react';

const Description = () => {
  return (
    <section id="description" className="py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">About the Game</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Stimulation Clicker is a dynamic and fast-paced clicker game developed by Neal Agarwal. 
            In this game, players earn &quotstimulation&quot points by continuously clicking a button.
          </p>
          
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Game Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Simple and addictive gameplay mechanics</li>
              <li>Progressive difficulty and rewards</li>
              <li>Engaging visual feedback</li>
              <li>Endless gameplay possibilities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description; 