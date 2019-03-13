export const getMovieData = {
  type: "GET_MOVIE_DATA"
};

export const setMovieData = (movies) => {
  return {
  type: "SET_MOVIE_DATA",
  movies: movies
}
};
