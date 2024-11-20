import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import bookingSlice from './bookingSlice';


export const store = configureStore({
  
    reducer:{
        booking:bookingSlice.reducer
    }
});
