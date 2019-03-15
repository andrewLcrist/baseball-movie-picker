import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as ROUTES from '../../constants/routes';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


  const firebase = app.initializeApp(config);

  const db = firebase.database()
  export const auth = firebase.auth()


  export const doSignInWithEmailAndPassword = (email, password) => {
    auth.setPersistence('session')
    .then(function() {
      auth.signInWithEmailAndPassword(email, password).then((user) => {return user})
    })
    .catch(function(error) {
      console.log('auth error', error);
      var errorCode = error.code;
      var errorMessage = error.message;
  });}

  export const doSignOut = () => auth.signOut();

  export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

  export const doPasswordUpdate = password =>
    auth.currentUser.updatePassword(password);

  export const baseballMovies = () => db.ref('baseballMovies/');

  export const doAuth = () => {
    let userLoggedIn
    return auth.onAuthStateChanged(user => {
      console.log('doAuth user', user);
      if(user) {
        userLoggedIn = false
        return true
      } else {
        userLoggedIn = false
        return false
      }
    })
  }

  export const addMovieToDatabase = (title, movie) => {
    db.ref('baseballMovies/').child(title).set({
      movie
    }, function(error) {
    if (error) {
      console.log('error', error);
    } else {
      console.log('success');
    }
  })
  };

  export const currentUser = () => auth.currentUser
