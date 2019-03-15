import { takeLatest, call, put } from "redux-saga/effects";
import {doSignInWithEmailAndPassword, currentUser} from '../components/Firebase/firebase';

export function* watchHandleUserSignIn() {
  yield takeLatest("HANDLE_USER_SIGN_IN", handleUserSignIn);
}

export function* handleUserSignIn(action) {
  doSignInWithEmailAndPassword(action.email, action.password)
}
