import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';

const App = () => {
  const [listings, setListings] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      const mockListings = [
        {
          id: 1,
          title: 'Cozy Beachfront Cottage',
          type: 'Entire home',
          guests: 4,
          bedrooms: 2,
          bathrooms: 1,
          price: 150,
          rating: 4.8,
          image: 'https://via.placeholder.com/300x200.png?text=Beachfront+Cottage',
          category: 'Beachfront'
        },
        {
          id: 2,
          title: 'Luxurious Mountain Cabin',
          type: 'Entire cabin',
          guests: 6,
          bedrooms: 3,
          bathrooms: 2,
          price: 250,
          rating: 4.9,
          image: 'https://via.placeholder.com/300x200.png?text=Mountain+Cabin',
          category: 'Cabins'
        },
      ];
      setListings(mockListings);
    };

    fetchListings();
  }, []);

  const filteredListings = activeCategory
    ? listings.filter(listing => listing.category === activeCategory)
    : listings;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SearchBar />
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;