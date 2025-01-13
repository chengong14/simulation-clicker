import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Simulation Clicker</h3>
            <p className="text-gray-400">
              A fun and addictive clicker game that will keep you entertained for hours!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#game" className="hover:text-white transition-colors">
                  Play Game
                </Link>
              </li>
              <li>
                <Link href="#guide" className="hover:text-white transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Simulation Clicker. All rights reserved. Game created by Neal Agarwal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 