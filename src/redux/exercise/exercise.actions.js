import { ExerciseActionTypes } from "./exercise.types";

import { firestore, convertExercisesSnapshotToMap } from "../../firebase/firebase.utils";

export const checkinExercise = () => ({
  type: ExerciseActionTypes.CHECKIN_EXERCISE
});

export const addSet = () => ({
  type: ExerciseActionTypes.ADD_SET
});

export const removeSet = () => ({
  type: ExerciseActionTypes.REMOVE_SET
});

export const addExercise = name => ({
  type: ExerciseActionTypes.ADD_EXERCISE,
  payload: name
});

export const removeExercise = (dateAndName) => ({
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
})


// FETCHING DATA

export const fetchExercisesStart = () => ({
  type: ExerciseActionTypes.FETCH_EXERCISES_START
});

export const fetchExercisesSuccess = exerciseMap => ({
  type: ExerciseActionTypes.FETCH_EXERCISES_SUCCESS,
  payload: exerciseMap
});

export const fetchExercisesFailure = errorMessage => ({
  type: ExerciseActionTypes.FETCH_EXERCISES_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('exerciseCollection');
    dispatch(fetchExercisesStart());
    console.log("fetchCollectionsStart");

    collectionRef
      .get()
      .then(snapshot => {
        const exerciseMap = convertExercisesSnapshotToMap(snapshot);
        console.log(exerciseMap)
        dispatch(fetchExercisesSuccess(exerciseMap));
      })
      .catch(error => dispatch(fetchExercisesFailure(error.message)));
  };
};