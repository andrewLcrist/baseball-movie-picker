import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { connect } from 'react-redux';
import {searchMovies, addMovieToDatabase} from '../../Actions/movieDataActions'
import MoviePoster from '../MoviePoster'

class AddMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieSearch: ''
    }
  }

  handleMovieSearch = (e) => {
    this.setState({movieSearch: e.target.value})
  }

  search = () => {
    this.props.searchMovies(this.state.movieSearch)
  }

  addMovieToDataBase = (id) => {
    this.props.addMovieToDataBase(id)
  }

  render() {
    const runtimeHours = Math.floor(this.props.runtime/60)
    const runtimeHourLabel = runtimeHours > 1 ? 'hours' : 'hour'
    const runtimeMinutes = this.props.runtime % 60

    return (
      <div className="add-movie-container">
        <input value={this.state.movieSearch} type="text" onChange={(e) => this.handleMovieSearch(e)}/>
        <button onClick={this.search}>Search</button>
        {this.props.searchMovieResults && this.props.searchMovieResults.length !== 0 && this.props.searchMovieResults.map((movie, i) =>
          <div>
              <MoviePoster
              key={movie + `-` + i}
              poster={movie.poster_path}
              movieTitle={movie.title}
              releaseDate={movie.release_date}
              />
              <button onClick={() => this.addMovieToDataBase(movie.id)}>Add Movie to Database</button>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchMovieResults: state.movieData.movieSearch
});

const mapDispatchToProps = dispatch => ({
  searchMovies: (movie) => dispatch(searchMovies(movie)),
  addMovieToDataBase: (id) => dispatch(addMovieToDatabase(id))
});

const AddMoviePage =  compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withFirebase,
)(AddMovie);

export default AddMoviePage;

export { AddMovie };
