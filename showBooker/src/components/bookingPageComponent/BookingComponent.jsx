import React, { useEffect, useState } from 'react'
import { Button,Flex } from '@chakra-ui/react';
import Seats from './Seats';
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetails } from '../MovieListComponents/movieListDetails';
import { showDispatch } from '../../assets/Redux/SelectedMovieSlice';

const BookingComponent = () => {
// const [selectedMovie, setSelectedMovie] = useState(null);
const [show, setShow] = useState(null);
const [bookingView,setBookingView]=useState(false)
const dispatch=useDispatch()


const selectedMovie=useSelector((state)=>{ return state.selectedMovie
})

const movieName=Object.keys(selectedMovie)[0]


useEffect(()=>{
  console.log(selectedMovie);
},[selectedMovie])


const handleClick = (showName) => {
    setShow(showName)
    dispatch(showDispatch({name:movieName,show:showName}))
  };
  return (
    <>

       <div className='flex flex-col  w-full h-[100vh]  justify-center items-center'>
       <div className="max-w-lg rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="relative">
        <img
          src={movieDetails[movieName]?.img}
          alt="Movie Poster"
          className="w-full h-80 object-fill" // Adjust height for better visuals
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
      </div>

      <div className="p-6 bg-black text-white">
        {/* <h3 className="text-3xl font-semibold">{movieName}</h3> Increased font size */}
        <p className="text-md mt-2 text-gray-300 opacity-80">
        {movieDetails[movieName]?.details}
        </p>
      </div>
     
  
       </div>
 <div>

<div className='w-[100vw] flex flex-row justify-end my-2 '>
<div className="flex gap-3 mx-5">
  <Button
    onClick={() => handleClick('MorningShow')}
    bg={show === 'MorningShow' ? 'blue.500' : 'slategrey'}
    color={'white' }    p={2}
    _hover={{ bg: 'slate.500' }}
  >
    Morning Show
  </Button>
  <Button
    onClick={() => handleClick('NoonShow')}
    bg={show === 'NoonShow' ? 'blue.500' : 'slategrey'}
    color={'white' }
    p={2}
    _hover={{ bg: 'slate.500' }}
  >
    Noon Show
  </Button>
  <Button
    onClick={() => handleClick('FirstShow')}
    bg={show === 'FirstShow' ? 'blue.500' : 'slategrey'}
    color={'white' }    p={2}
    _hover={{ bg: 'slate.500' }}
  >
    First Show
  </Button>
  <Button
    onClick={() => handleClick('SecondShow')}
    bg={show === 'SecondShow' ? 'blue.500' : 'slategrey'}
    color={'white' }    p={2}
    _hover={{ bg: 'slate.500' }}
  >
    Second Show
  </Button>
</div>

</div>
        <Seats MovieName={movieName} showName={show}/>
</div>
  </div >
    </>
  )
}

export default BookingComponent