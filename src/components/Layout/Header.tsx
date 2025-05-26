import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bell, User, Search as SearchIcon } from 'lucide-react';
import { mockUserProfile } from '../../data/mockData';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };
  
  return (
    <header 
      className={`sticky top-0 z-10 flex items-center justify-between w-full px-8 py-4 transition-colors duration-300 ${
        scrolled ? 'bg-background-dark/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button 
            onClick={() => navigate(-1)}
            className="bg-black/30 rounded-full p-1 backdrop-blur-sm"
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => navigate(1)}
            className="bg-black/30 rounded-full p-1 backdrop-blur-sm"
            aria-label="Go forward"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {location.pathname === '/search' && (
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">
              <SearchIcon size={16} />
            </div>
            <input 
              type="text"
              placeholder="Search for songs, artists, or albums"
              className="bg-white/10 rounded-full py-2 pl-9 pr-4 w-[300px] focus:outline-none focus:ring-2 focus:ring-primary-400 placeholder:text-white/60"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-200" aria-label="Notifications">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2 p-1 pr-3 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors duration-200 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-secondary-600 flex items-center justify-center overflow-hidden">
            {mockUserProfile.imageUrl ? (
              <img 
                src={mockUserProfile.imageUrl} 
                alt={mockUserProfile.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={16} />
            )}
          </div>
          <span className="text-sm font-medium">{mockUserProfile.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;