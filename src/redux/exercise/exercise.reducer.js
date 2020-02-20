import { ExerciseActionTypes } from "./exercise.types";

import {
  addExerciseToDatabase,
  removeExerciseFromDatabase,
  addSetsToDatabase
} from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  exerciseName: "",
  exercises: {},
  pickedDate: ""
};

const exerciseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExerciseActionTypes.CHECKIN_EXERCISE:
      return {
        ...state
      };
    case ExerciseActionTypes.ADD_SET:
      const { name } = action.payload;

      addSetsToDatabase(state.pickedDate, name, state.exercises[name]);

      //const newState = { ...state };

      //newState["exercises"][id][name].push({ reps: 0, weight: 0 });

      return {
        ...state,
        exercises: {
          ...state.exercises,
          [name]: [...state.exercises[name], { reps: 0, weight: 0 }]
        }

        //exercises: [...state.sets, {[action.payload]: }]
      };
    case ExerciseActionTypes.REMOVE_SET:
      return {
        ...state,
        sets: [...state.sets.slice(0, -1)]
      };
    case ExerciseActionTypes.ADD_EXERCISE:
      addExerciseToDatabase(state.exerciseName, state.pickedDate);

      return {
        ...state,
        exercises: {
          ...state.exercises,
          [state.exerciseName]: [{ reps: 0, weight: 0 }]
        }
      };
    case ExerciseActionTypes.REMOVE_EXERCISE:
      removeExerciseFromDatabase(action.payload);

      const updatedExercises = state.exercises.filter(
        object => !object.hasOwnProperty(...action.payload)
      );

      return {
        ...state,
        exercises: [...updatedExercises]
      };
    case ExerciseActionTypes.SET_EXERCISE_NAME:
      return {
        ...state,
        exerciseName: action.payload
      };
    case ExerciseActionTypes.OPEN_EXERCISE:
      return {
        ...state
      };

    case ExerciseActionTypes.FETCH_EXERCISES_START:
      return {
        ...state,
        pickedDate: action.payload
      };
    case ExerciseActionTypes.FETCH_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: action.payload
      };
    case ExerciseActionTypes.FETCH_EXERCISES_FAILURE:
      return {
        ...state
      };
    case ExerciseActionTypes.DISPATCH_SETS_START:
      return {
        ...state
      };
    case ExerciseActionTypes.DISPATCH_SETS_SUCCESS:
      return {
        ...state
      };
    case ExerciseActionTypes.DISPATCH_SETS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default exerciseReducer;
