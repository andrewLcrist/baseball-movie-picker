import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import MoviePoster from '../MoviePoster'
import MovieDetail from '../MovieDetail'
import { connect } from 'react-redux';
import { currentUser, doAuth, baseballMovies} from '../Firebase/firebase';
import {setMovieData} from '../../Actions/movieDataActions'
import * as ROUTES from '../../constants/routes';

class MoviesPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      showModal: false,
      movieModal: {}
    }
  }

  componentDidMount = () => {
    baseballMovies().on('value', snapshot => {
      this.props.setMovieData(snapshot.val())
    })
  }

  render() {
    return(
      <div className="outer-movie-container">
        <div className="movie-container">
        {this.props.baseballMovies && Object.values(this.props.baseballMovies).map((movie, i) =>
          <MoviePoster
            key={movie.movie.movieData.title + `-` + i}
            poster={movie.movie.movieData.poster_path}
            movieTitle={movie.movie.movieData.title}
            releaseDate={movie.movie.movieData.release_date}
            runtime={movie.movie.movieData.runtime}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  baseballMovies: state.movieData.movies,
  admin: state.admin
});

const mapDispatchToProps = dispatch => ({
  setMovieData: (movies) => dispatch(setMovieData(movies))
});

const MoviesPage =  compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withFirebase,
)(MoviesPageComponent);

export default MoviesPage;

export { MoviesPageComponent };
