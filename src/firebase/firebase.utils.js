import firebase from "firebase/app";

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

export const addExerciseToDatabase = async (exerciseName, pickedDate) => {
  const collectionRef = firestore.doc("exerciseCollection/" + pickedDate);

  await collectionRef
    .set({
      [exerciseName]: [{
        reps: 0,
        weight: 0
      }]
    }, {
      merge: true
    })
    .catch(err => {
      console.log("error setting documents", err);
    });
};

export const resetDay = (pickedDate) => {
  const docRef = firestore.collection("exerciseCollection").doc(pickedDate);

  docRef
    .delete().then(() => console.log("Succesfully deleted" + pickedDate))
    .catch(err => console.log("error removing exercise", err));
}


export const addSetsToDatabase = async (
  exercises,
  date
) => {
  const collectionRef = firestore.doc("exerciseCollection/" + date);

  // sets[sets.length - 1] = { reps: reps, weight: weight };

  await collectionRef
    .set({
      ...exercises
    }, {
      merge: true
    })
    .catch(err => {
      console.log("error setting documents", err);
    });
};

export const removeExerciseFromDatabase = async ({
  date,
  name
}) => {
  const docRef = firestore.collection("exerciseCollection").doc(date);

  await docRef
    .update({
      [name]: firebase.firestore.FieldValue.delete()
    })
    .catch(err => console.log("error removing exercise", err));
};

export const convertExercisesSnapshotToMap = exercises => {
  const fetchedData = exercises.data();

  return fetchedData;
};

export const firestore = firebase.firestore();