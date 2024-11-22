import { createSlice } from '@reduxjs/toolkit';
import { movieDetails } from '../components/MovieListComponents/movieListDetails';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {movieDetails,loading:false},
  reducers: {
    bookMovie: (state, action) => {


      if(action.payload.loading){
        state.loading=!state.loading
        return
      }
      const { movie, show, row, seat } = action.payload;
      if (state.movieDetails[movie] && state.movieDetails[movie][show] && state.movieDetails[movie][show].seats[row]) {
        const seatToBook = state.movieDetails[movie][show].seats[row].find((s) => s.seatNumber === seat);
        if (seatToBook && !seatToBook.isBooked) {
          seatToBook.isBooked = true;
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
export default bookingSlice; 
