import React from 'react';
import GamePage from '../../../components/GamePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planet Clicker 2 - Continue Your Space Adventure',
  description: 'Planet Clicker 2 takes your cosmic journey to the next level! Explore new galaxies, unlock advanced technologies, and expand your space empire in this exciting sequel.',
  keywords: 'planet clicker 2, space game sequel, clicker game, space adventure, online game, browser game',
  openGraph: {
    title: 'Planet Clicker 2 - Continue Your Space Adventure',
    description: 'Continue your cosmic journey in this exciting sequel to Planet Clicker!',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/img/PlanetClicker2.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet Clicker 2 Game Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planet Clicker 2 - Continue Your Space Adventure',
    description: 'Continue your cosmic journey in this exciting sequel to Planet Clicker!',
    images: ['/img/PlanetClicker2.jpg']
  }
};

export default function PlanetClicker2Page() {
  return (
    <GamePage
      title="Planet Clicker 2"
      description="Continue your cosmic journey in this exciting sequel to Planet Clicker!"
      gameUrl="https://games.crazygames.com/en_US/planet-clicker-2/index.html?v=1.317"
    />
  );
} 