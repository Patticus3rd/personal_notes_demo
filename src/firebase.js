import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcX3dJwnt6VCwdmWY1yEb6XfMoU7frcCM",
    authDomain: "personalnotes-8fa05.firebaseapp.com",
    databaseURL: "https://personalnotes-8fa05.firebaseio.com",
    projectId: "personalnotes-8fa05",
    storageBucket: "personalnotes-8fa05.appspot.com",
    messagingSenderId: "63888470248"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes')
