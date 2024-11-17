import { Button } from '@mui/material';
import React from 'react'
import { movieDetails } from './movieDetails';
import seats from './seat';
  

const Seats = ({MovieName,showName}) => {
    let seat;
    console.log("MovieName",MovieName);
    
    if(MovieName!=null && showName!=null){
        console.log(movieDetails);
    }
    
    
    
 
    
    
    return (
        // <div className='flex flex-col gap-2'>
        //   {seat.map((row) => (
        //     <div key={row.row} className='flex gap-3 justify-center items-center '>
        //       <h4>Row {row.row}</h4>
        //       <div style={{ display: 'flex', gap: '10px' }}>
        //         {row.seats.map((seat) => (
        //           <Button
        //             key={seat.seatNumber}
        //             onClick={() => toggleSeatSelection(row.row, seat.seatNumber)}
        //             style={{
        //               width: '40px',
        //               height: '40px',
        //               backgroundColor: seat.isBooked
        //                 ? 'gray'
        //                 : 
        //                  'white',
        //               border: '1px solid black',
        //               cursor: seat.isBooked ? 'not-allowed' : 'pointer',
        //             }}
        //             disabled={seat.isBooked}
        //           >
        //             {seat.seatNumber}
        //           </Button>
        //         ))}
        //       </div>
        //     </div>
        //   ))}
        // </div>
        <></>
      )
}

export default Seats