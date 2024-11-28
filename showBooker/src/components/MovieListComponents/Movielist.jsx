import React, { useEffect, useState } from 'react';
import { movieDetails } from './movieListDetails';
import { useDispatch, useSelector } from 'react-redux';
import { nameDispatch } from '../../Redux/SelectedMovieSlice';
import { setMovieList } from '../../Redux/bookingSlice';
import { useNavigate } from 'react-router-dom';
import { clearDispatch } from '../../Redux/SelectedMovieSlice';
import { getAllMovies } from '../../services/services';
import { useMutation } from '@tanstack/react-query';
const MovieList = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {mutate}=useMutation({
    mutationFn:getAllMovies,
    onSuccess:(res)=>{
        handleResponse(res.data)
    },
    onError:(data)=>{
        console.log(data);
    }
  })
  const existingList=useSelector((state)=>{ return state.booking.movieDetails
  })


  const handleResponse = (data) => {
    let resultData = data?.map((item) => {
      return { [item["movieName"]]: item }; 
    });

     resultData=resultData.reduce((acc, item) => {
      const [key, value] = Object.entries(item)[0]; 
      acc[key] = value; 
      return acc;
    }, {});
    dispatch(setMovieList(resultData));
 };
  

  const handleSelectedMovie=(Movie)=>{
    dispatch(nameDispatch({name:Movie}))
    navigate("/movie-details")
  }
  useEffect(()=>{
      dispatch(clearDispatch())
      mutate()
  },[])

useEffect(()=>{
 console.log( Object.entries(existingList));
 
},[existingList])

  


  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px',padding:"50px" }}>

  {Object.entries(existingList).map(([movieName, movieData]) => (
    <div
    className={`h-[400px] w-[300px] flex items-center justify-center bg-gray-100 `} 
      style={{ overflow: 'hidden' }} 
      key={movieName}
      onClick={()=>{handleSelectedMovie(movieName)}}
    >
      <img
        src={movieData?.img}
        alt={`${movieName} Poster`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
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
