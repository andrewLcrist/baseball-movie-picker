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
      width: '100%'
    }
  }

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
          <YouTube
            id="montage"
            videoId={movie.trailer}
            opts={opts}
          />
          <img src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path} />
        </div>
        <div className="modal-backdrop" onClick={() => closeModal()}></div>
      </div>
    )
    }

export default MovieModal;
