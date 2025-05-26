import React from 'react';
import { FeaturedSection, RecentlyPlayedSection, TrendingSection, CategorySection } from '../components';

const HomePage: React.FC = () => {
  return (
    <div>
      <FeaturedSection />
      <RecentlyPlayedSection />
      <TrendingSection />
      <CategorySection />
    </div>
  );
};

export default HomePage;