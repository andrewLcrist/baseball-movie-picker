import { takeLatest, call, put } from "redux-saga/effects";
import { addMovieToDatabase } from '../components/Firebase/firebase.js'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watchSearchMovies() {
  yield takeLatest("SEARCH_MOVIES", searchMovies);
}

// worker saga: makes the api call when watcher saga sees the action
export function* searchMovies(action) {
  try {
    let movies
    const updatedTitle = action.searchTitle.replace('', '+');
      yield fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${action.searchTitle}`)
      .then(response => response.json())
      .then(data => movies = data.results);

    // dispatch a success action to the store with the new dog
    yield put({ type: "SET_MOVIES_TO_STATE", movies });

  } catch (error) {
    // dispatch a failure action to the store with the error
    console.log('fail')
  }
}


export function* watchAddMovieToDatabase() {
  yield takeLatest("ADD_MOVIE_TO_DATABASE", getMovieData);
}


export function* getMovieData(action) {
  let movieData, credits, trailers, releaseDates, movie = {}
  yield fetch(`https://api.themoviedb.org/3/movie/${action.movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => movieData = data);

  yield fetch(`https://api.themoviedb.org/3/movie/${action.movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => credits = data);

    yield fetch(`https://api.themoviedb.org/3/movie/${action.movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => trailers = data);

    yield fetch(`https://api.themoviedb.org/3/movie/${action.movieId}/release_dates?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => releaseDates = data);

    movie.movieData = movieData
    movie.credits = credits
    movie.trailers = trailers
    movie.releaseDates = releaseDates
    const updatedTitle = movieData.title.replace(/\s/g, '')
    console.log(updatedTitle);

    yield addMovieToDatabase(updatedTitle, movie)
}
