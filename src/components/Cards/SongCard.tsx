import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Song } from '../../types';
import { usePlayer } from '../../context/PlayerContext';
import { formatTime } from '../../utils/formatters';

interface SongCardProps {
  song: Song;
  index?: number;
  showIndex?: boolean;
  compact?: boolean;
}

const SongCard: React.FC<SongCardProps> = ({ 
  song, 
  index, 
  showIndex = false,
  compact = false
}) => {
  const { playerState, playSong, togglePlay } = usePlayer();
  const isCurrentSong = playerState.currentSong?.id === song.id;
  const isPlaying = isCurrentSong && playerState.isPlaying;
  
  const handlePlay = () => {
    if (isCurrentSong) {
      togglePlay();
    } else {
      playSong(song);
    }
  };
  
  if (compact) {
    return (
      <div 
        className={`flex items-center p-2 rounded-md group hover:bg-white/10 transition-colors duration-200 ${
          isCurrentSong ? 'bg-white/5' : ''
        }`}
      >
        {showIndex && (
          <div className="w-8 text-center text-white/60 group-hover:hidden">
            {index}
          </div>
        )}
        <button
          onClick={handlePlay}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            showIndex ? 'hidden group-hover:flex' : ''
          } ${isCurrentSong ? 'bg-primary-500 text-white' : 'bg-white/20 text-white'}`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
        <div className="w-10 h-10 ml-2 rounded overflow-hidden">
          <img
            src={song.coverUrl}
            alt={song.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-3 flex-1">
          <h3 className={`text-sm font-medium ${isCurrentSong ? 'text-primary-400' : ''}`}>
            {song.title}
          </h3>
          <p className="text-xs text-white/60">{song.artist}</p>
        </div>
        <div className="text-sm text-white/60 pr-2">
          {formatTime(song.duration)}
        </div>
      </div>
    );
  }
  
  return (
    <div className="music-card group">
      <div className="relative mb-4">
        <div className="aspect-square rounded-md overflow-hidden bg-background-dark">
          <img
            src={song.coverUrl}
            alt={song.title}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={handlePlay}
          className="absolute bottom-2 right-2 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
      <h3 className="font-medium truncate">{song.title}</h3>
      <p className="text-sm text-white/70 truncate">{song.artist}</p>
    </div>
  );
};

export default SongCard;