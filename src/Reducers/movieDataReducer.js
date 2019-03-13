export default function movieDataReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_MOVIE_DATA':
      return {
        ...state,
        movies: action.movies
      }
    default:
      return state
  }
}
