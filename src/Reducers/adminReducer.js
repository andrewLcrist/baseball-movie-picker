import * as actions from '../Actions/types'

export default function adminReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userEmail: action.userEmail
      }
    case 'REMOVE_USER':
      return {
        ...state,
        userEmail: ''
      }
    default:
      return state
  }
}
