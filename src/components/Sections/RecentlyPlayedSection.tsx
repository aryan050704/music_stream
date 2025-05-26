import React from 'react';
import SongCard from '../Cards/SongCard';
import { mockUserProfile } from '../../data/mockData';

const RecentlyPlayedSection: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Recently Played</h2>
        <button className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200">
          See All
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {mockUserProfile.recentlyPlayed.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayedSection;