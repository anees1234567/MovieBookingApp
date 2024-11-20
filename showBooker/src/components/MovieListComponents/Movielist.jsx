import React, { useState } from 'react';
import { movieDetails } from './movieListDetails';


const MovieList = () => {
  
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px',padding:"50px" }}>
  {/* Loop through the movieDetails object */}
  {Object.entries(movieDetails).map(([movieName, movieData]) => (
    <div
    className={`h-[400px] w-[300px] flex items-center justify-center bg-gray-100 
      ${selectedMovie === movieName ? 'border-4 border-blue-500' : ''}`} 
      style={{ overflow: 'hidden' }} // Ensures the container hides overflow
      key={movieName}
      onClick={()=>{setSelectedMovie(movieName)}}
    >
      <img
        src={movieData.img}
        alt={`${movieName} Poster`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image fills the container proportionally
        }}
        
        className='hover:cursor-pointer'
      />
    </div>
  ))}

 
    </div>

  
    </>
  );
};

export default MovieList;
