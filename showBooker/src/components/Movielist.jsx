import React, { useState } from 'react';
import "../App.css"
import { movieDetails } from './movieDetails';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Seats from './Seats';
const MovieList = () => {
  const [show, setShow] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleAlignment = (event, showName) => {
    console.log(show)
    setShow(showName)
  };
  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
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

   <div className='w-[100vw] flex flex-row justify-end my-2'>
     <ToggleButtonGroup
       value={show}
       exclusive
       onChange={handleAlignment}
       aria-label="text alignment"
     >
       <ToggleButton
        sx={{
          '&.Mui-selected': {
            backgroundColor: 'lightgreen',
          },
        }}
         value="MorningShow" aria-label="left aligned">
             Morning 
       </ToggleButton>
       <ToggleButton
       sx={{
        '&.Mui-selected': {
          backgroundColor: 'lightgreen',
        },
      }}
       value="NoonShow" aria-label="centered">
           Noon Show
       </ToggleButton>
       <ToggleButton 
       sx={{
        '&.Mui-selected': {
          backgroundColor: 'lightgreen',
        },
      }}
       value="FirstShow" aria-label="right aligned">
           First Show
       </ToggleButton>
       <ToggleButton 
       sx={{
        '&.Mui-selected': {
          backgroundColor: 'lightgreen',
        },
      }}
       value="SecondShow" aria-label="justified" >
           Second Show
       </ToggleButton>
     </ToggleButtonGroup>
   </div>
   <Seats MovieName={selectedMovie} showName={show}/>
    </>
  );
};

export default MovieList;
