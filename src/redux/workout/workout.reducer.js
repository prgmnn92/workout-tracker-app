import { WorkoutActionTypes } from "./workout.types";

import {
  addExerciseToDatabase,
  removeExerciseFromDatabase,
  addSetsToDatabase
} from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  exerciseName: "",
  exercises: {},
  pickedDate: "",
  reps: "",
  weight: ""
};

const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkoutActionTypes.SET_REPS:
      return {
        ...state,
        reps: action.payload
      };
    case WorkoutActionTypes.SET_WEIGHT:
      return {
        ...state,
        weight: action.payload
      };
    case WorkoutActionTypes.ADD_SET:
      const { name } = action.payload;

      addSetsToDatabase(
        state.pickedDate,
        name,
        state.exercises[name],
        state.reps,
        state.weight
      );

      return {
        ...state,
        exercises: {
          ...state.exercises,
          [name]: [...state.exercises[name], { reps: 0, weight: 0 }]
        }
      };
    case WorkoutActionTypes.REMOVE_SET:
      return {
        ...state,
        sets: [...state.sets.slice(0, -1)]
      };
    case WorkoutActionTypes.ADD_EXERCISE:
      addExerciseToDatabase(state.exerciseName, state.pickedDate);

      return {
        ...state,
        exercises: {
          ...state.exercises,
          [state.exerciseName]: [{ reps: 0, weight: 0 }]
        }
      };
    case WorkoutActionTypes.REMOVE_EXERCISE:
      removeExerciseFromDatabase(action.payload);

      const updatedExercises = state.exercises.filter(
        object => !object.hasOwnProperty(...action.payload)
      );

      return {
        ...state,
        exercises: [...updatedExercises]
      };
    case WorkoutActionTypes.SET_EXERCISE_NAME:
      return {
        ...state,
        exerciseName: action.payload
      };
    case WorkoutActionTypes.FETCH_EXERCISES_START:
      return {
        ...state,
        pickedDate: action.payload
      };
    case WorkoutActionTypes.FETCH_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: action.payload
      };
    case WorkoutActionTypes.FETCH_EXERCISES_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default workoutReducer;
