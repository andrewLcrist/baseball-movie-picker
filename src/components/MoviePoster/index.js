import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

class MoviePoster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  render() {
    const runtimeHours = Math.floor(this.props.runtime/60)
    const runtimeHourLabel = runtimeHours > 1 ? 'hours' : 'hour'
    const runtimeMinutes = this.props.runtime % 60

    return (
      <div className="movie-poster-container">
      <div className="poster-image-container">
        <img
          onClick={() => this.props.history.push(`${ROUTES.MOVIE}/${this.props.movieTitle.replace(/\s/g, '')}`)}
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/` + this.props.poster}
        />
        </div>
        <div className="movie-poster-details-container">
        <p className="poster-movie-title">{this.props.movieTitle}</p>
        <p>{this.props.releaseDate.split('-')[0]}</p>
        {this.props.runtime &&
        <div>{runtimeHours} {runtimeHourLabel} {runtimeMinutes} minutes</div>
        }
        <p>Watch Trailer</p>
        </div>
      </div>
    );
  }
}

const MoviePosterPage =  compose(
  withRouter,
  withFirebase,
)(MoviePoster);

export default MoviePosterPage;

export { MoviePoster };
