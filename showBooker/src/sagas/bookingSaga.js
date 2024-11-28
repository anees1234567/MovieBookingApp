import { takeEvery, call, put,delay } from 'redux-saga/effects';
import { bookMovie,setLoading } from '../Redux/bookingSlice';
import { bookMovieService } from '../services/services';



function* bookMoviesSaga(action) {
    try {
        console.log(action.payload);
        yield put(setLoading(true));
        const result=yield bookMovieService(action.payload)
        if(result.responseIndicator=="success"){

           yield put(bookMovie({ ...action.payload}));
           alert("booking successfull")
        }else{
            alert("Booking Failed")
        }
      } catch (error) {
        console.error("Error in booking saga:", error);
      } finally {
        yield put(setLoading(false));
      }
  }

  export function* watchbookMovieSaga() {
    yield takeEvery("booking/triggerBooking", bookMoviesSaga); 
  }