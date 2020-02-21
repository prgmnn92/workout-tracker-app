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

export const setReps = value => ({
  type: ExerciseActionTypes.SET_REPS,
  payload: value
});

export const setWeight = value => ({
  type: ExerciseActionTypes.SET_WEIGHT,
  payload: value
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
