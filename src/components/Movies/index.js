import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import MoviePoster from '../MoviePoster'

class MoviesPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    }

  componentDidMount = () => {
    this.props.firebase.baseballMovies().on('value', snapshot => {
      this.setState({movies: Object.values(snapshot.val())})
    })
  }

  render() {
    return(
      <div className="movie-container">
        {this.state.movies !== [] && this.state.movies.map(movie => <MoviePoster movie={movie}/>)}
      </div>
    )
  }
}

const MoviesPage = compose(
  withRouter,
  withFirebase,
)(MoviesPageComponent);

export default MoviesPage;

export { MoviesPageComponent };
