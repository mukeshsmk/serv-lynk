import { firebase } from 'firebase';

  // Initialize Firebase

  var firebaseConfig = {
    apiKey: "AIzaSyDFzeTRSBtl3xxT2uqKZ-VU0gVzjoMvfUM",
    authDomain: "serv-lynk-1f3d0.firebaseapp.com",
    databaseURL: "https://serv-lynk-1f3d0.firebaseio.com",
    projectId: "serv-lynk-1f3d0",
    storageBucket: "serv-lynk-1f3d0.appspot.com",
    messagingSenderId: "1025467118551"
  };
  //const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firebaseApp = firebaseConfig;
  export default firebaseApp;