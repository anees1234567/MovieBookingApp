import { Button } from '@chakra-ui/react';
import React from 'react'
import { movieDetails } from '../MovieListComponents/movieListDetails';
import seats from './seat'
import { bookMovie } from '../../assets/Redux/bookingSlice';
import { useDispatch } from 'react-redux';
  

const Seats = ({MovieName,showName}) => {
    let seat;
    
    const dispatch =useDispatch()
    if(MovieName!=null && showName!=null){
        console.log(movieDetails);
    }
    
    const bookSeats=(seatData)=>{
          dispatch(bookMovie(seatData))    
    }
    
    
    
    
    return (
      <div className='flex flex-col gap-2'>
        {Object.entries(seats).map(([row, seatList]) => (
          <div key={row} className='flex gap-3 justify-center items-center'>
            <h4>Row {row}</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              {seatList.map((seat) => (
                <Button
                  key={seat.seatNumber}
                  onClick={() => bookSeats({ movie: MovieName, show: showName, row: row, seat: seat.seatNumber })}
                  width="40px"
                  height="40px"
                  bg={seat.isBooked ? 'gray.200' : 'green.400'}
                  border="1px solid black"
                  cursor={seat.isBooked ? 'not-allowed' : 'pointer'}
                  isDisabled={seat.isBooked}
                  _hover={{
                    bg: seat.isBooked ? 'gray.400' : 'gray.100',
                  }}
                  _active={{
                    bg: seat.isBooked ? 'gray.400' : 'gray.200',
                  }}
                >
                  {seat.seatNumber}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
    
}

export default Seats