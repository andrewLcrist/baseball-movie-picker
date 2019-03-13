import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


  const thing = app.initializeApp(config);

  const db = thing.database()
  const auth = thing.auth()

  export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  export const doSignOut = () => auth.signOut();

  export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

  export const doPasswordUpdate = password =>
    auth.currentUser.updatePassword(password);

  export const baseballMovies = () => db.ref('baseballMovies/');

  export const doAuth = () => auth.onAuthStateChanged(user => {
    if(user) {
      console.log('dingus')
    } else {
      return 'No one signed in'
    }
  })

  export const currentUser = () => auth.currentUser
