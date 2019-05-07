import React from 'react';
import { Link } from 'react-router-dom'

const MovieCard = props => {

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <Link to={`/movies/${props.movie.id}`} ><h2>{props.movie.title}</h2></Link>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {props.movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <button className="save-button" onClick={props.save}>
        Save
        </button>
    </div>
  );
};

export default MovieCard;
