import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SongCard, AlbumCard, ArtistCard } from '../components';
import { mockSongs, mockAlbums, mockArtists, mockCategories } from '../data/mockData';
import { Song, Album, Artist } from '../types';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState({
    songs: [] as Song[],
    albums: [] as Album[],
    artists: [] as Artist[],
  });
  
  useEffect(() => {
    if (query) {
      const filteredSongs = mockSongs.filter(song => 
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase())
      );
      
      const filteredAlbums = mockAlbums.filter(album => 
        album.title.toLowerCase().includes(query.toLowerCase()) ||
        album.artist.toLowerCase().includes(query.toLowerCase())
      );
      
      const filteredArtists = mockArtists.filter(artist => 
        artist.name.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults({
        songs: filteredSongs,
        albums: filteredAlbums,
        artists: filteredArtists,
      });
    } else {
      setResults({
        songs: [],
        albums: [],
        artists: [],
      });
    }
  }, [query]);
  
  const hasResults = results.songs.length > 0 || results.albums.length > 0 || results.artists.length > 0;
  
  return (
    <div>
      {!query ? (
        <div>
          <h1 className="text-3xl font-bold mb-8">Browse All</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockCategories.map(category => (
              <div 
                key={category.id}
                className="relative rounded-lg overflow-hidden group aspect-[2/1] bg-gradient-to-br from-primary-800 to-secondary-800"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-300 z-10"></div>
                <img 
                  src={category.imageUrl}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : hasResults ? (
        <div>
          <h1 className="text-3xl font-bold mb-8">Results for "{query}"</h1>
          
          {results.songs.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Songs</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.songs.slice(0, 5).map(song => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            </div>
          )}
          
          {results.albums.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Albums</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.albums.map(album => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </div>
            </div>
          )}
          
          {results.artists.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Artists</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.artists.map(artist => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="bg-white/5 p-8 rounded-full mb-6">
            <Search size={48} className="text-white/50" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No results found for "{query}"</h2>
          <p className="text-white/70">Try searching for songs, artists, or albums</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;