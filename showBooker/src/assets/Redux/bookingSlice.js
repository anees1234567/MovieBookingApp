import { createSlice } from '@reduxjs/toolkit';
import { movieDetails } from '../../components/MovieListComponents/movieListDetails';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: movieDetails,
  reducers: {
    bookMovie: (state, action) => {
      const { movie, show, row, seat } = action.payload;
  
      if (state[movie] && state[movie][show] && state[movie][show].seats[row]) {
        const seatToBook = state[movie][show].seats[row].find((s) => s.seatNumber === seat);
  
        if (seatToBook && !seatToBook.isBooked) {
          seatToBook.isBooked = true;
          console.log(`Seat ${seat} in row ${row} for ${movie} (${show}) has been successfully booked.`);
        } else {
          console.log(`Seat ${seat} in row ${row} for ${movie} (${show}) is already booked or does not exist.`);
        }
      } else {
        console.log(`Invalid movie, show, or row provided in the action payload.`);
      }
    },
  }
});

export const { bookMovie } = bookingSlice.actions; 
export default bookingSlice.reducer; 
