import './App.css';
import movieData from "./movies.json";
import { useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const[movies,setMovies]=useState(movieData)
  return ( <>
  <h1>movie app</h1>
  <MovieList movies={movies}/>
  </>
    
  );
}

export default App;
