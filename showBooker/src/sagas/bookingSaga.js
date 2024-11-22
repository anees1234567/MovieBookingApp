import { takeEvery, call, put } from 'redux-saga/effects';
import { bookMovie } from '../Redux/bookingSlice';
import { useDispatch } from 'react-redux';

function* bookMoviesSaga(action) {
    const dispatch=useDispatch()
    

    
    try {
     
    } catch (error) {
      
    }
  }

  export function* watchbookMovieSaga() {
    yield takeEvery("booking/bookMovie", bookMoviesSaga); 
  }