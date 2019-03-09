import React, { Component } from 'react';

const MovieModal = () =>
(
      <div className="movie-modal">
        <img src={`https://image.tmdb.org/t/p/w500/` + this.props.movie.backdrop_path} />
        <div className="modal-backdrop" onClick={() => this.props.closeModal()}></div>
      </div>
    )

export default MovieModal;
