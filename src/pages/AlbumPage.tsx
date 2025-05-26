import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause, Clock, MoreHorizontal } from 'lucide-react';
import { mockAlbums } from '../data/mockData';
import { usePlayer } from '../context/PlayerContext';
import { formatTime } from '../utils/formatters';

const AlbumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { playerState, playSong, togglePlay } = usePlayer();
  
  const album = mockAlbums.find(a => a.id === id);
  
  if (!album) {
    return <div>Album not found</div>;
  }
  
  const totalDuration = album.songs.reduce((total, song) => total + song.duration, 0);
  const formattedDuration = `${Math.floor(totalDuration / 60)} min ${totalDuration % 60} sec`;
  
  const isAlbumPlaying = 
    playerState.currentSong && 
    album.songs.some(song => song.id === playerState.currentSong?.id) &&
    playerState.isPlaying;
  
  const handlePlayAll = () => {
    if (album.songs.length === 0) return;
    
    if (isAlbumPlaying) {
      togglePlay();
    } else {
      playSong(album.songs[0]);
    }
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-8 items-center md:items-end">
        <div className="w-60 h-60 shadow-xl rounded-md overflow-hidden bg-background-light flex-shrink-0">
          <img 
            src={album.coverUrl} 
            alt={album.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <div className="text-sm font-medium mb-2">ALBUM</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{album.title}</h1>
          <p className="text-white/70 mb-1">{album.artist}</p>
          <p className="text-white/70 mb-4">{album.releaseYear} • {album.songs.length} songs, {formattedDuration}</p>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePlayAll}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
            >
              {isAlbumPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isAlbumPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-background-light rounded-lg overflow-hidden">
        <div className="grid grid-cols-[16px_5fr_1fr] py-2 px-4 border-b border-white/10 text-white/60 text-sm">
          <div>#</div>
          <div>TITLE</div>
          <div className="flex justify-end">
            <Clock size={16} />
          </div>
        </div>
        
        {album.songs.map((song, index) => (
          <div 
            key={song.id}
            className={`grid grid-cols-[16px_5fr_1fr] py-3 px-4 hover:bg-white/5 group ${
              playerState.currentSong?.id === song.id ? 'bg-white/5' : ''
            }`}
          >
            <div className="flex items-center">
              <span className="group-hover:hidden">{index + 1}</span>
              <button 
                onClick={() => playSong(song)}
                className="hidden group-hover:block"
              >
                {playerState.currentSong?.id === song.id && playerState.isPlaying 
                  ? <Pause size={16} /> 
                  : <Play size={16} />
                }
              </button>
            </div>
            
            <div className="flex items-center">
              <div>
                <div className={`font-medium ${playerState.currentSong?.id === song.id ? 'text-primary-400' : ''}`}>
                  {song.title}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-4">
              <button className="text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal size={16} />
              </button>
              <span className="text-white/60 text-sm">{formatTime(song.duration)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;