import { ExerciseActionTypes } from "./exercise.types";

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

export const removeExercise = () => ({
  type: ExerciseActionTypes.REMOVE_EXERCISE
});

export const setExerciseName = name => ({
  type: ExerciseActionTypes.SET_EXERCISE_NAME,
  payload: name
});
