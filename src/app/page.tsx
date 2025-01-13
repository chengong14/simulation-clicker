import React from 'react';
import Header from '../components/Header';
import GameSection from '../components/GameSection';
import Description from '../components/Description';
import Comments from '../components/Comments';
import SocialSharing from '../components/SocialSharing';
import Videos from '../components/Videos';
import GameplayGuide from '../components/GameplayGuide';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 space-y-16 py-8">
        <GameSection />
        <Description />
        <Videos />
        <GameplayGuide />
        <Comments />
        <SocialSharing />
      </div>
      
      <Footer />
    </main>
  );
} 