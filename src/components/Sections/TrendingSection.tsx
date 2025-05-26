import React from 'react';
import { SongCard, AlbumCard } from '../';
import { mockTrending } from '../../data/mockData';

const TrendingSection: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Trending Now</h2>
        <button className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200">
          See All
        </button>
      </div>
      
      <h3 className="text-lg font-medium mb-4">Top Songs</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {mockTrending.songs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
      
      <h3 className="text-lg font-medium mb-4">Top Albums</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {mockTrending.albums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;