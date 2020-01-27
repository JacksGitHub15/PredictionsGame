import app from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyANbhg-m1P39DiL85cXcNdu0WzT6ameXC0",
  authDomain: "predictionsgame-1190e.firebaseapp.com",
  databaseURL: "https://predictionsgame-1190e.firebaseio.com",
  projectId: "predictionsgame-1190e",
  storageBucket: "predictionsgame-1190e.appspot.com",
  messagingSenderId: "648725975102",
  appId: "1:648725975102:web:30c5f49eb9835767f5c16f",
  measurementId: "G-L7FGYZR7N1"
};

// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(config);
    //Authentication API
    this.auth = app.auth();
  }

  // *** Auth API Takes email and password parameters 
  // and uses an official Firebase API to create a user

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // Same idea but for sign in
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

firebase.analytics();

export default Firebase;