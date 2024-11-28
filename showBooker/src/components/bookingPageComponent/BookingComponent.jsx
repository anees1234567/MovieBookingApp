import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import Seats from './Seats';
import { useDispatch, useSelector } from 'react-redux';
import { showDispatch } from '../../Redux/SelectedMovieSlice';


const BookingComponent = () => {
  const [show, setShow] = useState(null);
  const [movieName, setMovieName] = useState(null); // Use state for movieName
  const dispatch = useDispatch();

  const selectedMovie = useSelector((state) => state.selectedMovie);
  const bookingState = useSelector((state) => state.booking);



  useEffect(() => {
    if (bookingState) {
      localStorage.setItem('bookingState', JSON.stringify(bookingState));
    }
  }, [bookingState]);



  useEffect(() => {
    const selectedMovieName = Object.keys(selectedMovie)[0] || localStorage.getItem('selectedMovies');
    setMovieName(selectedMovieName);

    if (Object.keys(selectedMovie).length > 0) {
      localStorage.setItem('selectedMovies', selectedMovieName);
    }
  }, [selectedMovie]);
  
  

  const handleClick = (showName) => {
    setShow(showName);
    dispatch(showDispatch({ name: movieName, show: showName }));
  };

  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center">
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
        <div className="relative">
          <img
            src={bookingState?.movieDetails[movieName]?.img || 'default_image_url'}
            alt="Movie Poster"
            className="w-full h-80 object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
        </div>

        <div className="p-6 bg-black text-white">
          <p className="text-md mt-2 text-gray-300 opacity-80">
            {bookingState?.movieDetails[movieName]?.details || 'No details available'}
          </p>
        </div>
      </div>

      <div className="w-[100vw] flex flex-row justify-end my-2">
        <div className="flex gap-3 mx-5">
          {['morningShow', 'noonShow', 'firstShow', 'secondShow'].map((showName) => (
            <Button
              key={showName}
              onClick={() => handleClick(showName)}
              bg={show === showName ? 'blue.500' : 'slategrey'}
              color="white"
              p={2}
              _hover={{ bg: 'slate.500' }}
            >
              {showName.replace(/([A-Z])/g, ' $1')}
            </Button>
          ))}
        </div>
      </div>

      <Seats MovieName={movieName} showName={show} />
    </div>
  );
};

export default BookingComponent;
