import { Button } from '@chakra-ui/react';
import React from 'react'
import { movieDetails } from '../MovieListComponents/movieListDetails';
import seats from './seat'
import { bookMovie } from '../../Redux/bookingSlice';
  

const Seats = ({MovieName,showName}) => {
    let seat;
    
    
    if(MovieName!=null && showName!=null){
        console.log(movieDetails);
    }
    
    const bookSeats=(seatData)=>{
        console.log(seatData);
        
    }
    
    
    
    
    return (
        <div className='flex flex-col gap-2'>
          {seats.map((row) => (
            <div key={row.row} className='flex gap-3 justify-center items-center '>
              <h4>Row {row.row}</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                {row.seats.map((seat) => (
                  <Button
                    key={seat.seatNumber}
                    onClick={() => bookSeats({row:row.row, seat:seat.seatNumber})}
                    width="40px"
                    height="40px"
                    bg={seat.isBooked ? 'gray.400' : 'white'}
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
       
      )
}

export default Seats