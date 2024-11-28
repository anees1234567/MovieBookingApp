import { createSlice } from '@reduxjs/toolkit';
const bookingSlice = createSlice({
  name: 'booking',
  initialState: {movieDetails:{},loading:false},
  reducers: {
    triggerBooking:(state,action)=>{},
    setMovieList:(state,action)=>{
      console.log(action.payload);
        state.movieDetails=action.payload
    },
    bookMovie: (state, action) => {
      const { movie, show, row, seat} = action.payload;
  
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
    setLoading:(state,action)=>{
        state.loading=action.payload
    }
  }
});

export const { bookMovie,setLoading ,triggerBooking,setMovieList} = bookingSlice.actions; 
export default bookingSlice; 
