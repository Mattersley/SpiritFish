import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: '<FIREBASE_API_KEY>',
  authDomain: '<PROJECT_ID>.firebaseapp.com',
  databaseURL: 'https://<PROJECT_ID>.firebaseio.com',
  projectId: '<PROJECT_ID>',
  storageBucket: '<PROJECT_ID>.appspot.com',
  messagingSenderId: '<MESSAGING_SENDER_ID>',
  appId: '<APP_ID>',
  measurementId: '<MEASUREMENT_ID>',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
