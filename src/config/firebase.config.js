import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC3Gx7MdHdSt4lBW6FMvzk4LqEkgUSsWzE",
  authDomain: "project-manager-51b4b.firebaseapp.com",
  databaseURL: "https://project-manager-51b4b.firebaseio.com",
  projectId: "project-manager-51b4b",
  storageBucket: "project-manager-51b4b.appspot.com",
  messagingSenderId: "989928703546"
};

firebase.initializeApp(config);

firebase.firestore();

export default firebase;
