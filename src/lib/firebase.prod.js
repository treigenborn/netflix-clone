import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAS89cz8b5xluz08BwfiDG4nqpcA8XXmWw',
  authDomain: 'netflix-clon-80687.firebaseapp.com',
  projectId: 'netflix-clon-80687',
  storageBucket: 'netflix-clon-80687.appspot.com',
  messagingSenderId: '1068441483913',
  appId: '1:1068441483913:web:5f71433bc55dd23315e458',
  measurementId: 'G-BCXHNJHFWV',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
