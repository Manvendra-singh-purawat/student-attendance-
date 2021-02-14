import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDVSxXqV_l-LbFmHJLh9Tj3RqXCU4fvWos",
    authDomain: "student-attendance-de4a1.firebaseapp.com",
    databaseURL: "https://student-attendance-de4a1.firebaseio.com",
    projectId: "student-attendance-de4a1",
    storageBucket: "student-attendance-de4a1.appspot.com",
    messagingSenderId: "310024606097",
    appId: "1:310024606097:web:01675ebb8fcf7c802eca30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();