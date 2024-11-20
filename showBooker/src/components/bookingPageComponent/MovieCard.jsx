import React from 'react';

const MovieCard = () => {
  return (
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="relative">
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/404/2860e9192636849.Y3JvcCwzMDMxLDIzNzAsMCw1Mg.jpg"
          alt="Movie Poster"
          className="w-full h-64 object-cover" // Adjust height for better visuals
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
      </div>

      <div className="p-6 bg-black text-white">
        <h3 className="text-3xl font-semibold">Nue Camp</h3> {/* Increased font size */}
        <p className="text-md mt-2 text-gray-300 opacity-80">
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
        </p>
      </div>

      <div className="p-4 flex justify-between bg-gray-800">
        <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md transition hover:bg-teal-700">
          Book Movie
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
