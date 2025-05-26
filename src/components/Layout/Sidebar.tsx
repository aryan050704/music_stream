import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, PlusCircle, Heart, Music } from 'lucide-react';
import { mockPlaylists } from '../../data/mockData';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-full bg-background-light flex flex-col overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Music size={28} className="text-primary-400" />
          <h1 className="text-xl font-bold">SoundWave</h1>
        </div>
        
        <nav>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `sidebar-item ${isActive ? 'active' : ''}`
                }
                end
              >
                <Home size={20} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/search" 
                className={({isActive}) => 
                  `sidebar-item ${isActive ? 'active' : ''}`
                }
              >
                <Search size={20} />
                <span>Search</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/library" 
                className={({isActive}) => 
                  `sidebar-item ${isActive ? 'active' : ''}`
                }
              >
                <Library size={20} />
                <span>Your Library</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="mt-8">
          <div className="sidebar-item mb-4 cursor-pointer">
            <PlusCircle size={20} />
            <span>Create Playlist</span>
          </div>
          <div className="sidebar-item cursor-pointer">
            <Heart size={20} />
            <span>Liked Songs</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-4 pt-4 px-6 flex-1 overflow-y-auto scrollbar-hide">
        <h3 className="text-sm text-white/60 font-medium mb-4">PLAYLISTS</h3>
        <ul className="space-y-3">
          {mockPlaylists.map(playlist => (
            <li key={playlist.id}>
              <NavLink 
                to={`/playlist/${playlist.id}`}
                className={({isActive}) => 
                  `text-sm hover:text-white transition-colors duration-200 block py-1 ${
                    isActive ? 'text-white' : 'text-white/70'
                  }`
                }
              >
                {playlist.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;