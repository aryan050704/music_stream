import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX, Heart, Repeat, Shuffle, ListMusic } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';
import { formatTime } from '../../utils/formatters';

const MusicPlayer: React.FC = () => {
  const { playerState, togglePlay, setVolume, seekTo, nextSong, prevSong } = usePlayer();
  const { currentSong, isPlaying, volume, progress, duration } = playerState;
  
  const [showVolume, setShowVolume] = useState(false);
  const [liked, setLiked] = useState(false);
  
  if (!currentSong) {
    return (
      <div className="h-20 bg-background-light border-t border-white/10 px-4 flex items-center justify-center text-white/40">
        <p>Select a song to play</p>
      </div>
    );
  }
  
  const progressPercentage = (progress / duration) * 100;
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const percentage = clickPosition / rect.width;
    const newProgress = percentage * duration;
    seekTo(newProgress);
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  
  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX size={20} />;
    if (volume < 0.5) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };
  
  return (
    <div className="h-20 bg-background-light border-t border-white/10 px-4 grid grid-cols-3 items-center">
      {/* Song Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded overflow-hidden">
          <img 
            src={currentSong.coverUrl} 
            alt={currentSong.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{currentSong.title}</h4>
          <p className="text-sm text-white/70">{currentSong.artist}</p>
        </div>
        <button 
          onClick={() => setLiked(!liked)}
          className={`player-control ${liked ? 'text-accent-500' : 'text-white/70'}`}
          aria-label={liked ? "Unlike" : "Like"}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      {/* Player Controls */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 mb-2">
          <button className="player-control text-white/70" aria-label="Shuffle">
            <Shuffle size={18} />
          </button>
          <button 
            onClick={prevSong}
            className="player-control" 
            aria-label="Previous"
          >
            <SkipBack size={22} />
          </button>
          <button 
            onClick={togglePlay}
            className="bg-white rounded-full p-2 text-black hover:scale-105 transition-all duration-200" 
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button 
            onClick={nextSong}
            className="player-control" 
            aria-label="Next"
          >
            <SkipForward size={22} />
          </button>
          <button className="player-control text-white/70" aria-label="Repeat">
            <Repeat size={18} />
          </button>
        </div>
        
        <div className="flex items-center w-full gap-2">
          <span className="text-xs text-white/70 w-10 text-right">
            {formatTime(progress)}
          </span>
          <div 
            className="progress-bar flex-1"
            onClick={handleProgressClick}
          >
            <div 
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="text-xs text-white/70 w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>
      
      {/* Volume & Additional Controls */}
      <div className="flex items-center justify-end gap-3">
        <button className="player-control text-white/70" aria-label="Queue">
          <ListMusic size={18} />
        </button>
        <div className="relative">
          <button 
            className="player-control"
            onMouseEnter={() => setShowVolume(true)}
            aria-label="Volume"
          >
            <VolumeIcon />
          </button>
          
          {showVolume && (
            <div 
              className="absolute bottom-full right-0 mb-2 p-2 bg-background-dark rounded-lg shadow-xl w-32"
              onMouseLeave={() => setShowVolume(false)}
            >
              <input 
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;