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
    !currentUser() && this.props.history.push(ROUTES.SIGN_IN)
    baseballMovies().on('value', snapshot => {
      this.props.setMovieData(snapshot.val())
    })
  }

  render() {
    return(
      <div className="movie-container">
        {this.props.baseballMovies && Object.values(this.props.baseballMovies).map((movie, i) => <MoviePoster key={movie + `-` + i} poster={movie.poster_path} movieTitle={movie.title}/>)}

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
