import firebase from 'firebase';

  
    //paste your SDK here

  var firebaseConfig = {
  apiKey: "AIzaSyCvxr23cYt-t35di50wNSkBq_QheS0ytmA",
  authDomain: "team-voting-app-cd328.firebaseapp.com",
  projectId: "team-voting-app-cd328",
  storageBucket: "team-voting-app-cd328.appspot.com",
  messagingSenderId: "100482639651",
  appId: "1:100482639651:web:2e9789929b24a5a6c30e96",
  measurementId: "G-Q3TSCW05F8"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();