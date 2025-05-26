import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause, Clock, MoreHorizontal } from 'lucide-react';
import { mockPlaylists } from '../data/mockData';
import { Cards } from '../components';
import { usePlayer } from '../context/PlayerContext';
import { formatTime } from '../utils/formatters';

const PlaylistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { playerState, playSong, togglePlay } = usePlayer();
  
  const playlist = mockPlaylists.find(p => p.id === id);
  
  if (!playlist) {
    return <div>Playlist not found</div>;
  }
  
  const totalDuration = playlist.songs.reduce((total, song) => total + song.duration, 0);
  const formattedDuration = `${Math.floor(totalDuration / 60)} min ${totalDuration % 60} sec`;
  
  const isPlaylistPlaying = 
    playerState.currentSong && 
    playlist.songs.some(song => song.id === playerState.currentSong?.id) &&
    playerState.isPlaying;
  
  const handlePlayAll = () => {
    if (playlist.songs.length === 0) return;
    
    if (isPlaylistPlaying) {
      togglePlay();
    } else {
      playSong(playlist.songs[0]);
    }
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-8 items-center md:items-end">
        <div className="w-60 h-60 shadow-xl rounded-md overflow-hidden bg-background-light flex-shrink-0">
          <img 
            src={playlist.coverUrl} 
            alt={playlist.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <div className="text-sm font-medium mb-2">PLAYLIST</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{playlist.title}</h1>
          <p className="text-white/70 mb-4">Created by {playlist.createdBy} • {playlist.songs.length} songs, {formattedDuration}</p>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePlayAll}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
            >
              {isPlaylistPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isPlaylistPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-background-light rounded-lg overflow-hidden">
        <div className="grid grid-cols-[16px_4fr_2fr_1fr] py-2 px-4 border-b border-white/10 text-white/60 text-sm">
          <div>#</div>
          <div>TITLE</div>
          <div>ALBUM</div>
          <div className="flex justify-end">
            <Clock size={16} />
          </div>
        </div>
        
        {playlist.songs.map((song, index) => (
          <div 
            key={song.id}
            className={`grid grid-cols-[16px_4fr_2fr_1fr] py-3 px-4 hover:bg-white/5 group ${
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
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded overflow-hidden">
                <img 
                  src={song.coverUrl}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className={`font-medium ${playerState.currentSong?.id === song.id ? 'text-primary-400' : ''}`}>
                  {song.title}
                </div>
                <div className="text-sm text-white/60">{song.artist}</div>
              </div>
            </div>
            
            <div className="flex items-center text-white/60 text-sm">
              {song.album}
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

export default PlaylistPage;