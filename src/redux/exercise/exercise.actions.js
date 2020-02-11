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

export const addExercise = () => ({
  type: ExerciseActionTypes.ADD_EXERCISE
});

export const removeExercise = () => ({
  type: ExerciseActionTypes.REMOVE_EXERCISE
});
