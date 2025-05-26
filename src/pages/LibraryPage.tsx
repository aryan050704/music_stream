import React, { useState } from 'react';
import { PlaylistCard, SongCard } from '../components';
import { mockUserProfile } from '../data/mockData';

type TabType = 'playlists' | 'songs' | 'albums' | 'artists';

const LibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('playlists');
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Your Library</h1>
        
        <div className="flex space-x-1 bg-white/5 p-1 rounded-lg inline-block">
          {['playlists', 'songs', 'albums', 'artists'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabType)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {activeTab === 'playlists' && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mockUserProfile.playlists.map(playlist => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'songs' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Liked Songs</h2>
          <div className="bg-background-light rounded-lg overflow-hidden">
            {mockUserProfile.likedSongs.map((song, index) => (
              <SongCard 
                key={song.id} 
                song={song} 
                index={index + 1}
                showIndex
                compact
              />
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'albums' && (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">No saved albums</h2>
            <p className="text-white/70 mb-6">Albums you save will appear here</p>
            <button className="bg-white text-background-dark px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-200">
              Browse Albums
            </button>
          </div>
        </div>
      )}
      
      {activeTab === 'artists' && (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">No followed artists</h2>
            <p className="text-white/70 mb-6">Artists you follow will appear here</p>
            <button className="bg-white text-background-dark px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-200">
              Browse Artists
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;