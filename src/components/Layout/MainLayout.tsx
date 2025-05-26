import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MusicPlayer from '../Player/MusicPlayer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <Header />
          <main className="p-8">
            <Outlet />
          </main>
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default MainLayout;