import { ExerciseActionTypes } from "./exercise.types";

import {
  firestore,
  convertExercisesSnapshotToMap
} from "../../firebase/firebase.utils";

export const addSet = name => ({
  type: ExerciseActionTypes.ADD_SET,
  payload: name
});

export const addExercise = () => ({
  type: ExerciseActionTypes.ADD_EXERCISE
});

export const removeExercise = dateAndName => ({
  type: ExerciseActionTypes.REMOVE_EXERCISE,
  payload: dateAndName
});

export const setExerciseName = name => ({
  type: ExerciseActionTypes.SET_EXERCISE_NAME,
  payload: name
});

export const openExercise = name => ({
  type: ExerciseActionTypes.OPEN_EXERCISE,
  payload: name
});

// FETCHING DATA

export const fetchExercisesStart = pickedDate => ({
  type: ExerciseActionTypes.FETCH_EXERCISES_START,
  payload: pickedDate
});

export const fetchExercisesSuccess = exerciseMap => ({
  type: ExerciseActionTypes.FETCH_EXERCISES_SUCCESS,
  payload: exerciseMap
});

export const fetchExercisesFailure = errorMessage => ({
  type: ExerciseActionTypes.FETCH_EXERCISES_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = date => {
  return dispatch => {
    const collectionRef = firestore.collection("exerciseCollection").doc(date);

    dispatch(fetchExercisesStart(date));

    collectionRef
      .get()
      .then(snapshot => {
        const exerciseMap = convertExercisesSnapshotToMap(snapshot);

        dispatch(fetchExercisesSuccess(exerciseMap));
      })
      .catch(error => dispatch(fetchExercisesFailure(error.message)));
  };
};

//TODO: DISPATCH SETS ASYNC

export const dispatchSetsStart = () => ({
  type: ExerciseActionTypes.DISPATCH_SETS_START
});

export const dispatchSetsSuccess = setsMap => ({
  type: ExerciseActionTypes.DISPATCH_SETS_SUCCESS,
  payload: setsMap
});

export const dispatchSetsFailure = errorMessage => ({
  type: ExerciseActionTypes.DISPATCH_SETS_FAILURE,
  payload: errorMessage
});

export const dispatchSetsStartAsync = (date, exerciseName, sets) => {
  return dispatch => {
    const collectionRef = firestore.doc("exerciseCollection/" + date);

    console.log("KEY", sets.key);
    console.log("SETS", sets);

    collectionRef
      .set(
        {
          [exerciseName]: sets
        },
        { merge: true }
      )
      .then(result => {
        const setsMap = result.data();
        dispatch(dispatchSetsSuccess(setsMap));
      })
      .catch(err => {
        dispatch(dispatchSetsFailure(err.message));
      });
  };
};
