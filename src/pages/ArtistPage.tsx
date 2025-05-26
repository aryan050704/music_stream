import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';
import { mockArtists, mockSongs, mockAlbums } from '../data/mockData';
import { SongCard, AlbumCard } from '../components';
import { usePlayer } from '../context/PlayerContext';

const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { playerState, playSong, togglePlay } = usePlayer();
  
  const artist = mockArtists.find(a => a.id === id);
  
  if (!artist) {
    return <div>Artist not found</div>;
  }
  
  const artistSongs = mockSongs.filter(song => song.artist === artist.name);
  const artistAlbums = mockAlbums.filter(album => album.artist === artist.name);
  
  const isArtistPlaying = 
    playerState.currentSong && 
    artistSongs.some(song => song.id === playerState.currentSong?.id) &&
    playerState.isPlaying;
  
  const handlePlayAll = () => {
    if (artistSongs.length === 0) return;
    
    if (isArtistPlaying) {
      togglePlay();
    } else {
      playSong(artistSongs[0]);
    }
  };
  
  return (
    <div>
      <div className="relative h-80 mb-8 flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-0">
          <img 
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 p-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">{artist.name}</h1>
          {artist.genre && (
            <p className="text-white/70 mb-6">{artist.genre}</p>
          )}
          
          <div className="flex gap-4">
            <button 
              onClick={handlePlayAll}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
            >
              {isArtistPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isArtistPlaying ? 'Pause' : 'Play'}
            </button>
            <button className="bg-transparent border border-white/20 hover:border-white/40 px-8 py-3 rounded-full font-medium transition-colors duration-200">
              Follow
            </button>
          </div>
        </div>
      </div>
      
      {artist.bio && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-white/70 max-w-3xl">{artist.bio}</p>
        </div>
      )}
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular</h2>
        <div className="bg-background-light rounded-lg overflow-hidden">
          {artistSongs.map((song, index) => (
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
      
      {artistAlbums.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Albums</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {artistAlbums.map(album => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistPage;