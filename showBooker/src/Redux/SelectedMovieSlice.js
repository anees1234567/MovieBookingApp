import { createSlice } from '@reduxjs/toolkit';


const bookingSlice = createSlice({
  name: 'selectedMovie',
  initialState: {},
  reducers: {
    selectmovie: (state,action) => {
        
    }
  
  },
});

export const { bookMovie } = bookingSlice.actions;
export default bookingSlice