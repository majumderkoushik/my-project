import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import moviesData from './db.json'
import './App.css'


function MovieList(props) {
  const { movies } = props;

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </div>
  );
}

function Movie(props) {
  const { data } = props;

  return (
    
    <div className="flex card space-x-4 justify-between box">
    <div className=" flex flex-col des">
    <div className="flex space-x-6">
    <div><img src={data.imageUrl} alt={data.name} className="w-30 h-40" /></div>
    <div className=" flex flex-col">
       <div><h2 className="text-2xl">{data.title}</h2></div>
       <div className="flex space-x-2">
       <p>{data.releaseYear},</p>
      <h2>{data.director}</h2>
      
      </div>
      <div>
      <p>Duration: {data.durationMinutes} minutes</p>
      <p>Genres: {data.genres.join(', ')}</p></div>
      </div>
      </div>
      <p>{data.description}</p>
      </div>
      <div className="mx-10 flex items-center"><img src={data.bimage} /></div>
     
    </div>
    
  );
}
function App() {
  return (
    <div className="flex justify-center items-center flex-col border-spacing-3 boxx">
      <h1 className="text-4xl">Movie List</h1>
      <MovieList movies={moviesData.movies} />
    </div>
  );
}

export default App
