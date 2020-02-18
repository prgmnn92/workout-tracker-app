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

export const addExerciseToDatabase = async exerciseName => {
  const date = new Date().toISOString().split("T")[0];
  const collectionRef = firestore.doc("exerciseCollection/" + date);

  await collectionRef
    .set(
      {
        [exerciseName]: null
      },
      { merge: true }
    )
    .catch(err => {
      console.log("error setting documents", err);
    });
};

export const addSetsToDatabase = async (date, exerciseName, sets) => {
  const collectionRef = firestore.doc("exerciseCollection/" + date);

  await collectionRef
    .set(
      {
        [exerciseName]: sets
      },
      { merge: true }
    )
    .catch(err => {
      console.log("error setting documents", err);
    });
};

export const removeExerciseFromDatabase = async ({ date, name }) => {
  const docRef = firestore.collection("exerciseCollection").doc(date);

  await docRef
    .update({
      [name]: firebase.firestore.FieldValue.delete()
    })
    .catch(err => console.log("error removing exercise", err));
};

export const convertExercisesSnapshotToMap = exercises => {
  let transformedExercise = Object.keys(exercises.data()).map(key => ({
    [key]: null
  }));

  return transformedExercise;
};

export const convertSetsSnapshotToMap = (snapshot, name) => {
  const setsArray = snapshot.data()[name];
  return setsArray;
};

export const convertTrainingdaySnapshotToMap = trainingdays => {
  return trainingdays.docs.map(doc => doc.id);
};

export const firestore = firebase.firestore();
