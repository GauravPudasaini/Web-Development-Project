import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBIw8qCf-d8AOV67oO7ZCXnNXgGQA7nj9w",
  authDomain: "test-7815b.firebaseapp.com",
  databaseURL: "https://test-7815b-default-rtdb.firebaseio.com",
  projectId: "test-7815b",
  storageBucket: "test-7815b.appspot.com",
  messagingSenderId: "325689833090",
  appId: "1:325689833090:web:25bb169ff7c3eb8e16a69b"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}