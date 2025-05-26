import React from 'react';
import { Link } from 'react-router-dom';
import { mockCategories } from '../../data/mockData';

const CategorySection: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Browse Categories</h2>
        <button className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200">
          See All
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockCategories.map(category => (
          <Link 
            key={category.id}
            to={`/category/${category.id}`}
            className="relative rounded-lg overflow-hidden group aspect-[2/1]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-300 z-10"></div>
            <img 
              src={category.imageUrl}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;