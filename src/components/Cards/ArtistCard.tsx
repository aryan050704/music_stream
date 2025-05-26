import React from 'react';
import { Artist } from '../../types';
import { Link } from 'react-router-dom';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`} className="block music-card group">
      <div className="relative mb-4">
        <div className="aspect-square rounded-full overflow-hidden bg-background-dark">
          <img
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="font-medium truncate text-center">{artist.name}</h3>
      <p className="text-sm text-white/70 truncate text-center">Artist</p>
    </Link>
  );
};

export default ArtistCard;