import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const ListingCard = ({ listing }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={listing.image} alt={listing.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{listing.title}</div>
        <p className="text-gray-700 text-base">{listing.type}</p>
        <p className="text-gray-700 text-base">
          {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms
        </p>
        <p className="text-gray-900 font-bold mt-2">${listing.price} / night</p>
        <div className="flex items-center mt-2">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 text-gray-700">{listing.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;