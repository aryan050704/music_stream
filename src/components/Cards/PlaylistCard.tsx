import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Playlist } from '../../types';
import { usePlayer } from '../../context/PlayerContext';
import { Link } from 'react-router-dom';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { playerState, playSong, togglePlay } = usePlayer();
  
  const handlePlay = () => {
    // Play the first song in the playlist
    if (playlist.songs.length > 0) {
      const firstSong = playlist.songs[0];
      const isCurrentlyPlaying = 
        playerState.currentSong?.id === firstSong.id && 
        playerState.isPlaying;
      
      if (isCurrentlyPlaying) {
        togglePlay();
      } else {
        playSong(firstSong);
      }
    }
  };
  
  const isPlaying = 
    playlist.songs.length > 0 && 
    playerState.currentSong?.id === playlist.songs[0].id && 
    playerState.isPlaying;
  
  return (
    <div className="music-card group">
      <Link to={`/playlist/${playlist.id}`} className="block">
        <div className="relative mb-4">
          <div className="aspect-square rounded-md overflow-hidden bg-background-dark">
            <img
              src={playlist.coverUrl}
              alt={playlist.title}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handlePlay();
            }}
            className="absolute bottom-2 right-2 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
        <h3 className="font-medium truncate">{playlist.title}</h3>
        <p className="text-sm text-white/70 truncate">By {playlist.createdBy}</p>
        <p className="text-xs text-white/50 mt-1">{playlist.songs.length} songs</p>
      </Link>
    </div>
  );
};

export default PlaylistCard;