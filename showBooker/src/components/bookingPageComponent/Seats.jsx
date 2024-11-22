import { Button } from '@chakra-ui/react';

import seats from './seat'
import { bookMovie } from '../../Redux/bookingSlice';
import { useDispatch, useSelector } from 'react-redux';
import {toaster,Toaster} from "../ui/toaster"
  

const Seats = ({MovieName,showName}) => {
  
    let seatData;
    const dispatch =useDispatch()
    
    
    const bookSeats=(seatData)=>{
          dispatch(bookMovie(seatData))    
    }

    const bookingState=useSelector((state)=>{ return state.booking.movieDetails})
    if(MovieName!=null && showName!=null){
      
      seatData=bookingState[MovieName][showName]["seats"];
  }else{
        seatData=seats
  }
    
    
    

    
    return (
      <div className='flex flex-col gap-2'>
        <Toaster/>
        {Object.entries(seatData).map(([row, seatList]) => (
          <div key={row} className='flex gap-3 justify-center items-center'>
            <h4>Row {row}</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              {seatList.map((seat) => (
                <Button
                  key={seat.seatNumber}
                  onClick={() => {
                    if (showName != null) {
                      if (!seat.isBooked) {
                        bookSeats({ movie: MovieName, show: showName, row: row, seat: seat.seatNumber });
                        toaster.create({
                          description: "Booked successfully",
                          type: "success",
                          duration: 3000,
                        });
                      } else {
                        toaster.create({
                          description: "Seats already booked",
                          type: "info",
                          duration: 3000,
                        });
                      }
                    } else {
                      toaster.create({
                        description: "Select show time first",
                        type: "warning", 
                        duration: 3000,
                      });
                    }
                  }}
                  
                  width="40px"
                  height="40px"
                  bg={seat.isBooked ? 'gray.200' : 'green.400'}
                  border="1px solid black"
                  cursor={seat.isBooked ? 'not-allowed' : 'pointer'}
                  isDisabled={seat.isBooked}
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