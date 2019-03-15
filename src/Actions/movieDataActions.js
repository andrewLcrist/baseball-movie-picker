export const getMovieData = {
  type: "GET_MOVIE_DATA"
};

export const setMovieData = (movies) => {
  return {
  type: "SET_MOVIE_DATA",
  movies: movies
  }
};

export const searchMovies = (searchTitle) => {
  return {
  type: "SEARCH_MOVIES",
  searchTitle: searchTitle
  }
};

export const setMoviesToState = (movies) => {
  return {
  type: "SET_MOVIES_TO_STATE",
  movies: movies
  }
};

export const addMovieToDatabase = (movieId) => {
  return {
    type: "ADD_MOVIE_TO_DATABASE",
    movieId: movieId
  }
};
