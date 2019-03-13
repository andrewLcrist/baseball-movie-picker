import { combineReducers } from 'redux';
import movieDataReducer from './movieDataReducer'
import adminReducer from './adminReducer'

export default combineReducers({
    movieData: movieDataReducer,
    admin: adminReducer,
});
