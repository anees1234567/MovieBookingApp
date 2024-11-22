import React, { useEffect, useState } from 'react';
import { movieDetails } from './movieListDetails';
import { useDispatch, useSelector } from 'react-redux';
import { nameDispatch } from '../../Redux/SelectedMovieSlice';
import { useNavigate } from 'react-router-dom';
import { clearDispatch } from '../../Redux/SelectedMovieSlice';



const MovieList = () => {
  
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const handleSelectedMovie=(Movie)=>{
    dispatch(nameDispatch({name:Movie}))
    navigate("/movie-details")
  }
 const selectedMovie=useSelector((state)=>{return state.selectedMovie})



  useEffect(()=>{
      dispatch(clearDispatch())
      console.log(selectedMovie);
      
  },[])


  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px',padding:"50px" }}>
  {/* Loop through the movieDetails object */}
  {Object.entries(movieDetails).map(([movieName, movieData]) => (
    <div
    className={`h-[400px] w-[300px] flex items-center justify-center bg-gray-100 `} 
      style={{ overflow: 'hidden' }} // Ensures the container hides overflow
      key={movieName}
      onClick={()=>{handleSelectedMovie(movieName)}}
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
