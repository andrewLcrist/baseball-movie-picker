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
    return (
      <div className="movie-poster-container">
        <img
          onClick={() => this.props.history.push(`${ROUTES.MOVIE}/${this.props.movieTitle.replace(/\s/g, '')}`)}
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/` + this.props.poster}
        />
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
