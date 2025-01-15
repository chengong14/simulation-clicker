import React from 'react';

const Description = () => {
  return (
    <section id="description" className="py-12">
      <div className="glass-effect rounded-2xl p-8 transform hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          About the Game
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-white text-lg leading-relaxed mb-8">
            Stimulation Clicker is a dynamic and fast-paced clicker game developed by Neal Agarwal. 
            In this game, players earn &ldquo;stimulation&rdquo; points by continuously clicking a button, 
            leading to an addictive and engaging gameplay experience.
          </p>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">Game Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="hover-float">
                <div className="bg-white/5 p-6 rounded-lg h-full backdrop-blur-sm border border-purple-500/20">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4">Core Mechanics</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="text-purple-400">•</span>
                      <span>Simple and addictive gameplay</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-purple-400">•</span>
                      <span>Progressive difficulty system</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="hover-float">
                <div className="bg-white/5 p-6 rounded-lg h-full backdrop-blur-sm border border-pink-500/20">
                  <h4 className="text-xl font-semibold text-pink-300 mb-4">Rewards & Progress</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="text-pink-400">•</span>
                      <span>Engaging visual feedback</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-pink-400">•</span>
                      <span>Endless gameplay possibilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description; 