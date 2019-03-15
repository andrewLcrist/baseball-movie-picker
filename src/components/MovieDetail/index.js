import React, { Component } from 'react';
import { filter } from 'lodash';
import ActorCard from '../ActorCard'
import YouTube from 'react-youtube';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    let movie = window.location.href.split('movie/')[1]
    let movieIndex = Object.keys(props.baseballMovies).map(thing => thing.replace(/[^\w\s]/gi, '').toLowerCase() === movie.replace(/[^\w\s]/gi, '').toLowerCase()).indexOf(true)
    if (Object.values(props.baseballMovies)[movieIndex] !== state.movie) {
      return {
        movie: Object.values(props.baseballMovies)[movieIndex].movie,
      };
    }

    return null;
  }

  render() {
    const director = filter(this.state.movie.credits.crew, { job: 'Director' }).map(e => e.name).join(', ');
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

      const runtimeHours = Math.floor(this.state.movie.movieData.runtime/60)
      const runtimeHourLabel = runtimeHours > 1 ? 'hours' : 'hour'
      const runtimeMinutes = this.state.movie.runtime % 60

    return(
      <div className="movie-modal">
      <img className="movie-modal-image-header" src={`https://image.tmdb.org/t/p/original` + this.state.movie.movieData.backdrop_path} />
              <div className="movie-modal-content-container">
              <div className="movie-modal-header-container">
                <h1 className="movie-title">{this.state.movie.movieData.title}</h1>
                <div>{runtimeHours} {runtimeHourLabel} {runtimeMinutes} minutes</div>
              </div>
              <div className="movie-modal-top-container">
                <div className="movie-details-container">
                  <div>Overview: {this.state.movie.movieData.overview}</div>
                  <div>Director: {director}</div>
                </div>
              </div>
              <div className="actor-card-container">
              {Object.values(this.state.movie.credits.cast).map(actor => <ActorCard actor={actor}/>)}
              </div>
              </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  baseballMovies: state.movieData.movies
});

const mapDispatchToProps = dispatch => ({
});

const MovieDetailPage =  compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withFirebase,
)(MovieDetail);

export default MovieDetailPage;

export { MovieDetail };
