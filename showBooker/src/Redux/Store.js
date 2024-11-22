import { configureStore} from '@reduxjs/toolkit';
import bookingSlice from './bookingSlice';
import selectingSlice from './SelectedMovieSlice'
import createSagaMiddleware from 'redux-saga';
import { watchbookMovieSaga } from '../sagas/bookingSaga';

const sagaMiddleware=createSagaMiddleware()

export const store = configureStore({
  
    reducer:{
        booking:bookingSlice.reducer,
        selectedMovie:selectingSlice.reducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],

});
sagaMiddleware.run(watchbookMovieSaga)
