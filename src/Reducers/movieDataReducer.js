export default function movieDataReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_MOVIE_DATA':
      return {
        ...state,
        movies: action.movies
      }
    case 'SET_MOVIES_TO_STATE':
    return {
      ...state,
      movieSearch: action.movies
    }
    default:
      return state
  }
}
