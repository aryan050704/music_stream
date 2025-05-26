import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Album } from '../../types';
import { usePlayer } from '../../context/PlayerContext';
import { Link } from 'react-router-dom';

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const { playerState, playSong, togglePlay } = usePlayer();
  
  const handlePlay = () => {
    // Play the first song in the album
    if (album.songs.length > 0) {
      const firstSong = album.songs[0];
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
    album.songs.length > 0 && 
    playerState.currentSong?.id === album.songs[0].id && 
    playerState.isPlaying;
  
  return (
    <div className="music-card group">
      <Link to={`/album/${album.id}`} className="block">
        <div className="relative mb-4">
          <div className="aspect-square rounded-md overflow-hidden bg-background-dark">
            <img
              src={album.coverUrl}
              alt={album.title}
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
        <h3 className="font-medium truncate">{album.title}</h3>
        <p className="text-sm text-white/70 truncate">{album.artist}</p>
        <p className="text-xs text-white/50 mt-1">{album.releaseYear} • {album.songs.length} songs</p>
      </Link>
    </div>
  );
};

export default AlbumCard;