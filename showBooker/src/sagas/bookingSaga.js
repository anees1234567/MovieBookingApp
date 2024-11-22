import { takeEvery, call, put,delay } from 'redux-saga/effects';
import { bookMovie,setLoading } from '../Redux/bookingSlice';


function* bookMoviesSaga(action) {
    try {
        yield put(setLoading(true));
        yield delay(3000);
        yield put(bookMovie({ ...action.payload}));
      } catch (error) {
        console.error("Error in booking saga:", error);
      } finally {
        yield put(setLoading(false));
      }
  }

  export function* watchbookMovieSaga() {
    yield takeEvery("booking/triggerBooking", bookMoviesSaga); 
  }