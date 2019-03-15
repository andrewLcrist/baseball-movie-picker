import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {searchMovies, watchSearchMovies, watchAddMovieToDatabase, getMovieData} from './movieDataSaga'
import {watchHandleUserSignIn, handleUserSignIn} from './adminSaga'

export default function* rootSaga() {
  yield all([
    watchSearchMovies(),
    watchAddMovieToDatabase(),
    watchHandleUserSignIn()
  ])
}
