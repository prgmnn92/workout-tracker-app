import firebase from "firebase/app"

import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA1yT1VjbZMiwXIKZxO5NcvnyfT15WGCaM",
    authDomain: "workout-tracker-app-e909c.firebaseapp.com",
    databaseURL: "https://workout-tracker-app-e909c.firebaseio.com",
    projectId: "workout-tracker-app-e909c",
    storageBucket: "workout-tracker-app-e909c.appspot.com",
    messagingSenderId: "256477434913",
    appId: "1:256477434913:web:6b65d640c10560a247ff60",
    measurementId: "G-J52CQFW8V1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export const writeUserData = () => {

    const collectionRef = firestore.doc("test/one/");
    collectionRef.set({
      username: "name",
      email: "email",
      profile_picture : "imageUrl"
    });
  }

  export const firestore = firebase.firestore();