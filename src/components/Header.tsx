import React from 'react';
import Link from 'next/link';

const Header = () => {
  const navItems = [
    { name: 'Game', href: '#game' },
    { name: 'Description', href: '#description' },
    { name: 'Videos', href: '#videos' },
    { name: 'Guide', href: '#guide' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="glass-effect sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <h1 className="text-4xl font-extrabold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Stimulation Clicker
          </h1>
          
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-1 md:space-x-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="relative px-4 py-2 text-white hover:text-purple-300 transition-colors duration-200 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-200"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 