import { WorkoutActionTypes } from "./workout.types";

import {
  firestore,
  convertExercisesSnapshotToMap
} from "../../firebase/firebase.utils";

export const addSet = name => ({
  type: WorkoutActionTypes.ADD_SET,
  payload: name
});

export const removeSet = name => ({
  type: WorkoutActionTypes.REMOVE_SET,
  payload: name
});

export const addExercise = () => ({
  type: WorkoutActionTypes.ADD_EXERCISE
});

export const removeExercise = dateAndName => ({
  type: WorkoutActionTypes.REMOVE_EXERCISE,
  payload: dateAndName
});

export const setExerciseName = name => ({
  type: WorkoutActionTypes.SET_EXERCISE_NAME,
  payload: name
});

export const setReps = (value, name, id) => ({
  type: WorkoutActionTypes.SET_REPS,
  payload: { value, name, id }
});

export const setWeight = (value, name, id) => ({
  type: WorkoutActionTypes.SET_WEIGHT,
  payload: { value, name, id }
});

// FETCHING DATA

export const fetchExercisesStart = pickedDate => ({
  type: WorkoutActionTypes.FETCH_EXERCISES_START,
  payload: pickedDate
});

export const fetchExercisesSuccess = exerciseMap => ({
  type: WorkoutActionTypes.FETCH_EXERCISES_SUCCESS,
  payload: exerciseMap
});

export const fetchExercisesFailure = errorMessage => ({
  type: WorkoutActionTypes.FETCH_EXERCISES_FAILURE,
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
