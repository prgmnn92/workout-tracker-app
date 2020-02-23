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
      console.log();

      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload.name]: {
            ...state.exercises[action.payload.name],
            [action.payload.id]: {
              ...state.exercises[action.payload.name][action.payload.id],
              reps: action.payload.value
            }
          }
        }
      };
    case WorkoutActionTypes.SET_WEIGHT:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload.name]: {
            ...state.exercises[action.payload.name],
            [action.payload.id]: {
              ...state.exercises[action.payload.name][action.payload.id],
              weight: action.payload.value
            }
          }
        }
      };
    case WorkoutActionTypes.ADD_SET:
      const name = action.payload;

      addSetsToDatabase(
        state.pickedDate,
        name,
        state.exercises[name],
        state.reps,
        state.weight
      );

      const key =
        state.exercises[name] !== undefined &&
        Object.keys(state.exercises[name]).length > 0
          ? Object.keys(state.exercises[name]).length
          : 0;

      return {
        ...state,
        exercises: {
          ...state.exercises,
          [name]: {
            ...state.exercises[name],
            [key]: { reps: 0, weight: 0 }
          }
        }
      };
    case WorkoutActionTypes.REMOVE_SET:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload.name]: {
            ...Object.keys(state.exercises[action.payload.name]).filter(
              (_, i) =>
                i !==
                Object.keys(state.exercises[action.payload.name]).length - 1
            )
          }
        }
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
