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

export const getExerciseCollection = async () => {
  const docRef = firestore.collection("exerciseCollection");

  const exerciseCollection = await docRef
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }

      return snapshot.map(doc => doc.data);
    })
    .catch(err => {
      console.log("error getting documents", err);
    });

  console.log(exerciseCollection);
  return exerciseCollection; // TODO: noch nicht fertig
};

export const getExerciseCollectionToday = async (date) => {
  // const date = new Date().toISOString().split("T")[0];
  const docRef = firestore.collection("exerciseCollection").doc(date);

  let snapshotData = null;

  await docRef
    .get()
    .then(snapshot => (snapshotData = snapshot.data()))
    .catch(err => {
      console.log("error getting documents", err);
    });

  return snapshotData; //TODO: gibt nicht das object zurück
  //console.log(docRef.get());
};

export const removeExerciseFromDatabase = async ({date, name}) => {

  const docRef = firestore.collection('exerciseCollection').doc(date);

  // Remove the 'capital' field from the document
  await docRef.update({
      [name]: firebase.firestore.FieldValue.delete()
  })
  .catch(err => console.log("error removing exercise", err));
  //TODO: die exercises müssen zu redux hinzugefügt werden und nicht im locale state -> overview-page 
  console.log(date,name);
  // const docRef = firestore.collection("exerciseCollection").doc(date);
}

export const firestore = firebase.firestore();
