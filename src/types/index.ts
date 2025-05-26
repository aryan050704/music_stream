export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  audioUrl: string;
  releaseYear?: number;
  genre?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  releaseYear: number;
  songs: Song[];
  genre?: string;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genre?: string;
  bio?: string;
}

export interface Playlist {
  id: string;
  title: string;
  coverUrl: string;
  createdBy: string;
  songs: Song[];
}

export interface UserProfile {
  id: string;
  name: string;
  imageUrl?: string;
  playlists: Playlist[];
  recentlyPlayed: Song[];
  likedSongs: Song[];
}

export type PlayerState = {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  queue: Song[];
};

export type PlayerContextType = {
  playerState: PlayerState;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  seekTo: (progress: number) => void;
  nextSong: () => void;
  prevSong: () => void;
  addToQueue: (song: Song) => void;
  playSong: (song: Song) => void;
};