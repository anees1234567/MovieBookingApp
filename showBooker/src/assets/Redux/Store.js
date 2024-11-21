import { configureStore} from '@reduxjs/toolkit';
import bookingSlice from './bookingSlice';
import selectingSlice from './SelectedMovieSlice'


export const store = configureStore({
  
    reducer:{
        booking:bookingSlice.reducer,
        selectedMovie:selectingSlice.reducer
    }
});
