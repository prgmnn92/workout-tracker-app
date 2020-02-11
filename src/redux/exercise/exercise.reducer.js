import { ExerciseActionTypes } from "./exercise.types";

const INITIAL_STATE = {
  exercises: [{}],
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
      console.log(state);
      return {
        ...state,
        exercises: [...state.exercises, {}]
      };
    case ExerciseActionTypes.REMOVE_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises.slice(0, -1)]
      };
    default:
      return state;
  }
};

export default exerciseReducer;