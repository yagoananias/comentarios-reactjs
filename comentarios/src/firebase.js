import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMFptAtjY4hPL7V44-apibU1WZlcKyt3g",
  authDomain: "comments-yago.firebaseapp.com",
  databaseURL: "https://comments-yago.firebaseio.com",
  projectId: "comments-yago",
  storageBucket: "comments-yago.appspot.com",
  messagingSenderId: "967475237887",
  appId: "1:967475237887:web:9196e906fd6f27bf4e4dca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();