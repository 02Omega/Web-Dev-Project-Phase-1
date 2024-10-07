import React from 'react';

const categories = [
  'Beachfront',
  'Cabins',
  'Trending',
  'Countryside',
  'Luxe',
  'Ski-in/out',
  'Lakefront',
  'Amazing pools',
  'Islands',
  'Design',
];

const Categories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              activeCategory === category
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;