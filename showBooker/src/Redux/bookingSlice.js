// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { movieDetails } from '../components/MovieListComponents/movieListDetails';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: movieDetails,
  reducers: {
    bookMovie: (state,action) => {
    }
  
  },
});

export const { bookMovie } = bookingSlice.actions;
export default bookingSlice
