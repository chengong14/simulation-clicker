import React from 'react';
import GamePage from '../../../components/GamePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planet Clicker - Space Adventure Clicker Game',
  description: 'Explore the cosmos in Planet Clicker! Click your way through space, discover new planets, and build your galactic empire in this exciting space adventure.',
  keywords: 'planet clicker, space game, clicker game, space adventure, online game, browser game',
  openGraph: {
    title: 'Planet Clicker - Space Adventure Clicker Game',
    description: 'Explore the cosmos in this exciting space adventure clicker game!',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/img/PlanetClicker.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet Clicker Game Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planet Clicker - Space Adventure Clicker Game',
    description: 'Explore the cosmos in this exciting space adventure clicker game!',
    images: ['/img/PlanetClicker.jpg']
  }
};

export default function PlanetClickerPage() {
  return (
    <GamePage
      title="Planet Clicker"
      description="Explore the cosmos in this exciting space adventure clicker game!"
      gameUrl="https://games.crazygames.com/en_US/planet-clicker/index.html?v=1.317"
    />
  );
} 