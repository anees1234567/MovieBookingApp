import React, { useState } from 'react'
import { Button,Flex } from '@chakra-ui/react';
import Seats from './Seats';
import MovieCard from './MovieCard';

const BookingComponent = () => {
const [selectedMovie, setSelectedMovie] = useState(null);
const [show, setShow] = useState(null);
const [bookingView,setBookingView]=useState(false)
const handleClick = (event, showName) => {
    setShow(showName)
  };
  return (
    <>

       <div className='flex flex-col  w-full h-[100vh]  justify-center items-center'>
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
        <button  onClick={()=>{setBookingView(true)}} className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md transition hover:bg-teal-700">
          Book Movie
        </button>
      </div>
       </div>



{ bookingView &&  <div>

<div className='w-[100vw] flex flex-row justify-end my-2 '>
     <div className='flex gap-3 mx-5'>
      <Button
        onClick={() => handleClick(_,'MorningShow')}
       className='bg-neutral-200 p-2 hover:bg-slate-500'
      >
        Morning
      </Button>
      <Button
        onClick={() => handleClick(_,'NoonShow')}
        className='bg-neutral-200  p-2 hover:bg-slate-500'
      >
        Noon Show
      </Button>
      <Button
        onClick={() => handleClick(_,'FirstShow')}
       className='bg-neutral-200  p-2 hover:bg-slate-500'
      >
        First Show
      </Button>
      <Button
        className='bg-neutral-200  p-2 hover:bg-slate-500'
        onClick={() => handleClick(_,'SecondShow')}
       
      >
        Second Show
      </Button>
    </div>
</div>
        <Seats MovieName={selectedMovie} showName={show}/>
</div>}

      




       </div >
    
    
    </>
  )
}

export default BookingComponent