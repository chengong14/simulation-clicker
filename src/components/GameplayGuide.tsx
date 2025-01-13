import React from 'react';

const GameplayGuide = () => {
  return (
    <section id="guide" className="py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">How to Play</h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-indigo-600 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-900">Just Click and Enjoy!</h3>
            </div>
            
            <div className="ml-14">
              <p className="text-gray-700 leading-relaxed">
                The game is incredibly simple to play - all you need to do is click! 
                Each click generates stimulation points, which you can use to unlock 
                upgrades and increase your clicking power. Keep clicking and watch your 
                score multiply as you progress through the game.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Tips for Success</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Start with basic clicks to build up points</li>
                <li>• Invest in upgrades when available</li>
                <li>• Keep an eye on multipliers</li>
                <li>• Try to maintain a steady clicking rhythm</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Achievement Goals</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Reach your first 1,000 points</li>
                <li>• Unlock all basic upgrades</li>
                <li>• Achieve a 10x multiplier</li>
                <li>• Share your high score!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameplayGuide; 