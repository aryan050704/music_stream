import { Song, Album, Artist, Playlist } from '../types';

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Dreamscape',
    artist: 'Luna Ray',
    album: 'Midnight Echoes',
    duration: 237,
    coverUrl: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://example.com/audio/dreamscape.mp3',
    releaseYear: 2023,
    genre: 'Electronic'
  },
  {
    id: '2',
    title: 'Ocean Waves',
    artist: 'Coastal Dreams',
    album: 'Seaside Sessions',
    duration: 184,
    coverUrl: 'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://example.com/audio/ocean-waves.mp3',
    releaseYear: 2022,
    genre: 'Ambient'
  },
  {
    id: '3',
    title: 'Urban Rhythm',
    artist: 'City Pulse',
    album: 'Downtown Beats',
    duration: 195,
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://example.com/audio/urban-rhythm.mp3',
    releaseYear: 2023,
    genre: 'Hip Hop'
  },
  {
    id: '4',
    title: 'Mountain Echo',
    artist: 'Altitude',
    album: 'Peak Experience',
    duration: 274,
    coverUrl: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://example.com/audio/mountain-echo.mp3',
    releaseYear: 2021,
    genre: 'Indie'
  },
  {
    id: '5',
    title: 'Digital Sunset',
    artist: 'Luna Ray',
    album: 'Midnight Echoes',
    duration: 203,
    coverUrl: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://example.com/audio/digital-sunset.mp3',
    releaseYear: 2023,
    genre: 'Electronic'
  },
  {
    id: '6',
    title: 'Neon Streets',
    artist: 'City Pulse',
    album: 'Downtown Beats',
    duration: 189,
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://example.com/audio/neon-streets.mp3',
    releaseYear: 2023,
    genre: 'Hip Hop'
  }
];

export const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'Midnight Echoes',
    artist: 'Luna Ray',
    coverUrl: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600',
    releaseYear: 2023,
    songs: mockSongs.filter(song => song.album === 'Midnight Echoes'),
    genre: 'Electronic'
  },
  {
    id: '2',
    title: 'Seaside Sessions',
    artist: 'Coastal Dreams',
    coverUrl: 'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=600',
    releaseYear: 2022,
    songs: mockSongs.filter(song => song.album === 'Seaside Sessions'),
    genre: 'Ambient'
  },
  {
    id: '3',
    title: 'Downtown Beats',
    artist: 'City Pulse',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    releaseYear: 2023,
    songs: mockSongs.filter(song => song.album === 'Downtown Beats'),
    genre: 'Hip Hop'
  },
  {
    id: '4',
    title: 'Peak Experience',
    artist: 'Altitude',
    coverUrl: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600',
    releaseYear: 2021,
    songs: mockSongs.filter(song => song.album === 'Peak Experience'),
    genre: 'Indie'
  }
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Luna Ray',
    imageUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
    genre: 'Electronic',
    bio: 'Electronic music producer known for atmospheric soundscapes and driving beats.'
  },
  {
    id: '2',
    name: 'Coastal Dreams',
    imageUrl: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=600',
    genre: 'Ambient',
    bio: 'Ambient music collective inspired by oceanic themes and natural environments.'
  },
  {
    id: '3',
    name: 'City Pulse',
    imageUrl: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
    genre: 'Hip Hop',
    bio: 'Urban hip hop artist exploring city life through beats and rhymes.'
  },
  {
    id: '4',
    name: 'Altitude',
    imageUrl: 'https://images.pexels.com/photos/1576743/pexels-photo-1576743.jpeg?auto=compress&cs=tinysrgb&w=600',
    genre: 'Indie',
    bio: 'Indie rock band with folk influences and mountain-inspired lyrics.'
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Chill Vibes',
    coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdBy: 'SoundWave',
    songs: [mockSongs[1], mockSongs[3], mockSongs[4]]
  },
  {
    id: '2',
    title: 'Workout Mix',
    coverUrl: 'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdBy: 'SoundWave',
    songs: [mockSongs[2], mockSongs[5], mockSongs[0]]
  },
  {
    id: '3',
    title: 'Focus Flow',
    coverUrl: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdBy: 'SoundWave',
    songs: [mockSongs[4], mockSongs[1], mockSongs[3]]
  }
];

export const mockFeatured = {
  playlist: mockPlaylists[0],
  album: mockAlbums[0],
  artist: mockArtists[0],
};

export const mockTrending = {
  songs: [mockSongs[2], mockSongs[5], mockSongs[0], mockSongs[3]],
  albums: [mockAlbums[0], mockAlbums[2]],
};

export const mockCategories = [
  { id: '1', name: 'Electronic', imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '2', name: 'Hip Hop', imageUrl: 'https://images.pexels.com/photos/2090877/pexels-photo-2090877.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '3', name: 'Indie', imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '4', name: 'Ambient', imageUrl: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export const mockUserProfile = {
  id: 'user1',
  name: 'Music Lover',
  imageUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
  playlists: [
    {
      id: 'user-1',
      title: 'My Favorites',
      coverUrl: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdBy: 'user1',
      songs: [mockSongs[0], mockSongs[3], mockSongs[5]]
    }
  ],
  recentlyPlayed: [mockSongs[2], mockSongs[0], mockSongs[4]],
  likedSongs: [mockSongs[0], mockSongs[3], mockSongs[5]]
};