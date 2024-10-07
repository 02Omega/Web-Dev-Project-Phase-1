import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', location);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSearch} className="flex items-center border rounded-full shadow-sm">
        <input
          type="text"
          placeholder="Where are you going?"
          className="flex-grow px-4 py-2 rounded-l-full focus:outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded-r-full hover:bg-red-600 focus:outline-none"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;