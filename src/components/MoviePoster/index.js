import React, { Component } from 'react';

class MoviePoster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  render() {
    return (
      <div className="movie-poster-container">
        <img
          onClick={() => this.props.openModal(this.props.movie)}
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/` + this.props.movie.poster_path}
        />
      </div>
    );
  }
}

export default MoviePoster;
