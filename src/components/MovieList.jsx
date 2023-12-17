import React from 'react'
import MovieCard from './MovieCard';
export default function MovieList(props) {
    const{movies}=props
  return (
    <div>{movies.map((movie)=> <MovieCard movie={movie}/>)}</div>
  )
}

