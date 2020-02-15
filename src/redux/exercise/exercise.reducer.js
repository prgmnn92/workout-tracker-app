import { ExerciseActionTypes } from "./exercise.types";

import { addExerciseToDatabase } from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  exerciseName: "",
  exercises: [],
  sets: [{}]
};

const exerciseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExerciseActionTypes.CHECKIN_EXERCISE:
      return {
        ...state
      };
    case ExerciseActionTypes.ADD_SET:
      return {
        ...state,

        sets: [...state.sets, {}]
      };
    case ExerciseActionTypes.REMOVE_SET:
      return {
        ...state,
        sets: [...state.sets.slice(0, -1)]
      };
    case ExerciseActionTypes.ADD_EXERCISE:
      addExerciseToDatabase(state.exerciseName);

      return {
        ...state,
        exercises: [...state.exercises, { [action.payload]: null }]
      };
    case ExerciseActionTypes.REMOVE_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises.slice(0, -1)]
      };
    case ExerciseActionTypes.SET_EXERCISE_NAME:
      return {
        ...state,
        exerciseName: action.payload
      };
    default:
      return state;
  }
};

export default exerciseReducer;
