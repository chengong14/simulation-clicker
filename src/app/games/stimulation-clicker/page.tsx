import React from 'react';
import GamePage from '../../../components/GamePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stimulation Clicker - Fast-Paced Clicking Game',
  description: 'Play Stimulation Clicker - A dynamic and fast-paced clicker game that will keep you engaged for hours! Experience addictive gameplay and endless fun.',
  keywords: 'stimulation clicker, clicker game, online game, browser game, neal agarwal game',
  openGraph: {
    title: 'Stimulation Clicker - Fast-Paced Clicking Game',
    description: 'A dynamic and fast-paced clicker game that will keep you engaged for hours!',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stimulation Clicker Game Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stimulation Clicker - Fast-Paced Clicking Game',
    description: 'A dynamic and fast-paced clicker game that will keep you engaged for hours!',
    images: ['/og-image.jpg']
  }
};

export default function StimulationClickerPage() {
  return (
    <GamePage
      title="Stimulation Clicker"
      description="A dynamic and fast-paced clicker game that will keep you engaged for hours!"
      gameUrl="https://html-classic.itch.zone/html/12491167/index.html"
    />
  );
} 