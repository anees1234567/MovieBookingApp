import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/Movielist'

function App() {
  

  return (
   <div className=''  style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <h1>Movie List</h1>
         <MovieList/>
   </div>
  )
}

export default App
