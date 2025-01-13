'use client';

import React, { useState, useEffect } from 'react';

const SocialSharing = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const hashtags = [
    'StimulationClicker',
    'CasualGame',
    'StimulationClickerFree',
    'StimulationClickerOnline'
  ];

  const shareText = `Check out Stimulation Clicker - an amazing clicker game! ${hashtags.map(tag => `#${tag}`).join(' ')}`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent('Check out Stimulation Clicker!')}`,
  };

  return (
    <section className="py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Share Your Experience</h2>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#1DA1F2] text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
            >
              <span>Share on Twitter</span>
            </a>
            
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#4267B2] text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
            >
              <span>Share on Facebook</span>
            </a>
            
            <a
              href={shareLinks.reddit}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#FF4500] text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
            >
              <span>Share on Reddit</span>
            </a>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Your High Score</h3>
            <p className="text-gray-600">
              Take a screenshot of your highest score and share it with the community using the hashtags above!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSharing; 