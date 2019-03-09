import React, { Component } from 'react';
import MovieModal from '../MovieModal'

class MoviePoster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  openMovieModal = () => {
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div className="movie-poster-container">
        <img
          onClick={() => this.openMovieModal()}
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/` + this.props.movie.poster_path}
        />
        {this.state.showModal && <MovieModal closeModal={this.closeModal} movie={this.props.movie}/>}
      </div>
    );
  }
}

export default MoviePoster;
