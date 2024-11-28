
import './App.css'
import MovieList from './components/MovieListComponents/Movielist'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import BookingComponent from './components/bookingPageComponent/BookingComponent'
import { Provider } from './components/ui/provider'
import Navbar from './components/Navbar'
import Addmovie from './components/addMovieComponent/addmovie'



function App() {
  

  return (

    <Provider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie-details" element={<BookingComponent />} />
          <Route path="/add-movie" element={<Addmovie />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
