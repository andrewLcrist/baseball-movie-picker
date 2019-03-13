import React, { Component } from 'react';
import { filter } from 'lodash';
import ActorCard from '../ActorCard'
import YouTube from 'react-youtube';

const MovieModal = ({closeModal, movie}) => {

  const director = filter(movie.cast.crew, { job: 'Director' }).map(e => e.name).join(', ');
  const opts = {
    playerVars: {
      autoplay: 0,
      loop: 1,
      controls: 1,
      rel: 0,
      playsinline: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      width: '5rem'
    }
  }

  const runtimeHours = Math.floor(movie.runtime/60)
  const runtimeHourLabel = runtimeHours > 1 ? 'hours' : 'hour'
  const runtimeMinutes = movie.runtime % 60

  return(
      <div className="movie-modal">
      <img className="movie-modal-image-header" src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path} />
        <div className="movie-modal-content-container">
        <div className="movie-modal-header-container">
          <h1 className="movie-title">{movie.title}</h1>
          <div>{runtimeHours} {runtimeHourLabel} {runtimeMinutes} minutes</div>
        </div>
        <div className="movie-modal-top-container">
          <div className="movie-details-container">
            <div>Overview: {movie.overview}</div>
            <div>Director: {director}</div>
          </div>
        </div>
        <div className="actor-card-container">
        {Object.values(movie.cast.cast).map(actor => <ActorCard actor={actor}/>)}
        </div>
        </div>
        <div className="modal-backdrop" onClick={() => closeModal()}></div>
      </div>
    )
    }

export default MovieModal;
