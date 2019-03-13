import { combineReducers } from 'redux';
import movieDataReducer from './movieDataReducer'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
    movieData: movieDataReducer,
    admin: adminReducer,
});

export default rootReducer
