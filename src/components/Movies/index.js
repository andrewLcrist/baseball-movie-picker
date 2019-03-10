import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import MoviePoster from '../MoviePoster'
import MovieModal from '../MovieModal'

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
    this.props.firebase.baseballMovies().on('value', snapshot => {
      this.setState({movies: Object.values(snapshot.val())})
    })
  }

  openModal = (movie) => {
    this.setState({showModal: true, movieModal: movie})
  }

  closeModal = () => {
    this.setState({showModal: false, movieModal: {}})
  }

  render() {
    return(
      <div className="movie-container">
        {this.state.movies !== [] && this.state.movies.map(movie => <MoviePoster openModal={this.openModal} movie={movie}/>)}
        {this.state.showModal &&
          <MovieModal
            closeModal={this.closeModal}
            movie={this.state.movieModal}
          />
        }
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
