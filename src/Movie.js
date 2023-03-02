import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';


const Movie = () => {
  const {movie,isLoading}=useGlobalContext();
  if(isLoading){
    return(
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>

    );
  }
  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
    {movie.map((curMovie)=>{
        //  return <div>{currMovie.Title}</div>
        const {imdbID,Title,Poster}=curMovie;
        const newTitle=Title.length;
        const movieName=Title.substring(0,15);
        return <NavLink to={`movie/${imdbID}`}>
          <div className="card">
            <div className="card-info">
              <h2>{newTitle > 15 ? `${movieName}...`:movieName}</h2>
              <img src={Poster} alt={imdbID} srcset="" />
            </div>
          </div>
        </NavLink>
    })}
    </div>
    </section>
    
  )
}

export default Movie