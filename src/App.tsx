import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components';
import { HomePage, SearchPage, LibraryPage, PlaylistPage, AlbumPage, ArtistPage } from './pages';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  return (
    <BrowserRouter>
      <PlayerProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="playlist/:id" element={<PlaylistPage />} />
            <Route path="album/:id" element={<AlbumPage />} />
            <Route path="artist/:id" element={<ArtistPage />} />
          </Route>
        </Routes>
      </PlayerProvider>
    </BrowserRouter>
  );
}

export default App;