
import './App.css'
import MovieList from './components/MovieListComponents/Movielist'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import BookingComponent from './components/bookingPageComponent/BookingComponent'
import { Provider } from './components/ui/provider'


function App() {
  

  return (

    <Provider>
      <BrowserRouter>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<MovieList />} />
          <Route path="/movie-details" element={<BookingComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
