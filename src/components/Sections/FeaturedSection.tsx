import React from 'react';
import { PlaylistCard } from '../Cards';
import { mockFeatured } from '../../data/mockData';

const FeaturedSection: React.FC = () => {
  const { playlist } = mockFeatured;
  
  return (
    <div className="relative mb-8 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-background-dark z-0">
        <img 
          src={playlist.coverUrl}
          alt="Featured playlist background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>
      
      <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-64 h-64 rounded-lg overflow-hidden shadow-2xl">
          <img 
            src={playlist.coverUrl}
            alt={playlist.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="text-white/80 text-sm font-medium mb-2">FEATURED PLAYLIST</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{playlist.title}</h1>
          <p className="text-white/70 mb-6">The perfect collection to set the mood and enjoy the moment.</p>
          
          <div className="flex gap-4">
            <button className="bg-white text-background-dark px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-200">
              Play Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors duration-200">
              Save to Library
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;