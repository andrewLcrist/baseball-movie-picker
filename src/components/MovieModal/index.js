import React, { Component } from 'react';
import { filter } from 'lodash';
import ActorCard from '../ActorCard'

const MovieModal = ({closeModal, movie}) => {

  const director = filter(movie.cast.crew, { job: 'Director' }).map(e => e.name).join(', ');

  return(
      <div className="movie-modal">
        <div className="modal-content-container">
          <h1>{movie.title}</h1>
          <div>Overview: {movie.overview}</div>
          <div>Director: {director}</div>
          <div>Runtime: {movie.runtime}</div>
          <div className="actor-card-container">
          {Object.values(movie.cast.cast).map(actor => <ActorCard actor={actor}/>)}
          </div>
          <img src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path} />
        </div>
        <div className="modal-backdrop" onClick={() => closeModal()}></div>
      </div>
    )
    }

export default MovieModal;
