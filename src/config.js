import Firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAPvIhquDDWHwNBC5NTTaXq_HnBg_0FBX4",
    authDomain: "test-de8a9.firebaseapp.com",
    databaseURL: "https://test-de8a9.firebaseio.com",
    projectId: "test-de8a9",
    storageBucket: "test-de8a9.appspot.com",
    messagingSenderId: "1073633639250",
    appId: "1:1073633639250:web:4a208ae6e31c5e0f33188b",
    measurementId: "G-03RD0G6T71"
  };
  const app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database();