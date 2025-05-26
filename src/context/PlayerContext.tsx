import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Song, PlayerState, PlayerContextType } from '../types';

const initialPlayerState: PlayerState = {
  currentSong: null,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  queue: [],
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);
  
  // In a real app, we would use an audio element or a library like Howler.js
  // This is a simplified version for demo purposes
  
  const togglePlay = () => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  };
  
  const setVolume = (volume: number) => {
    setPlayerState(prev => ({
      ...prev,
      volume: volume,
    }));
  };
  
  const seekTo = (progress: number) => {
    setPlayerState(prev => ({
      ...prev,
      progress: progress,
    }));
  };
  
  const nextSong = () => {
    if (playerState.queue.length === 0) return;
    
    const nextSong = playerState.queue[0];
    const newQueue = playerState.queue.slice(1);
    
    setPlayerState(prev => ({
      ...prev,
      currentSong: nextSong,
      queue: newQueue,
      progress: 0,
      duration: nextSong.duration,
      isPlaying: true,
    }));
  };
  
  const prevSong = () => {
    // In a real app, we would have a history stack
    // For demo, we'll just restart the current song
    setPlayerState(prev => ({
      ...prev,
      progress: 0,
    }));
  };
  
  const addToQueue = (song: Song) => {
    setPlayerState(prev => ({
      ...prev,
      queue: [...prev.queue, song],
    }));
  };
  
  const playSong = (song: Song) => {
    setPlayerState(prev => ({
      ...prev,
      currentSong: song,
      isPlaying: true,
      progress: 0,
      duration: song.duration,
    }));
  };
  
  // Simulate progress updates (in a real app, this would come from the audio element)
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (playerState.isPlaying && playerState.currentSong) {
      interval = setInterval(() => {
        setPlayerState(prev => {
          if (prev.progress >= prev.duration) {
            clearInterval(interval);
            // Auto play next song if available
            if (prev.queue.length > 0) {
              nextSong();
              return prev;
            }
            return { ...prev, isPlaying: false, progress: 0 };
          }
          return { ...prev, progress: prev.progress + 1 };
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [playerState.isPlaying, playerState.currentSong]);
  
  const value: PlayerContextType = {
    playerState,
    togglePlay,
    setVolume,
    seekTo,
    nextSong,
    prevSong,
    addToQueue,
    playSong,
  };
  
  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};