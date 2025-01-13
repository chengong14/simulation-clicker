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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4 md:mb-0">
            stimulation Clicker Game
          </h1>
          
          <nav>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
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